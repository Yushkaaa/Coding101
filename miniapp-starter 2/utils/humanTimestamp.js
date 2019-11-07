import qs from './simple-query-string.min'

import { toTime } from './helpers/date';

const addZero = number => number.toString().padStart(2, '0');
const getTimezoneOffsetMs = () => new Date().getTimezoneOffset() * 60 * 1000;
const getHour = timestamp => new Date(timestamp).getHours();
const getMinute = timestamp => new Date(timestamp).getMinutes();
const getMonth = timestamp => new Date(timestamp).getMonth();
const getDay = timestamp => new Date(timestamp).getDay();
const getDate = timestamp => new Date(timestamp).getDate();
const getFullYear = timestamp => new Date(timestamp).getFullYear();
const toSeconds = timestamp => Math.floor((timestamp - getTimezoneOffsetMs()) / 1000); // count of seconds from 1970
const toMinutes = timestamp => Math.floor(toSeconds(timestamp) / 60); // count of minutes from 1970
const toHours = timestamp => Math.floor(toMinutes(timestamp) / 60); // count of hours from 1970
const toDays = timestamp => Math.floor(toHours(timestamp) / 24); // count of days from 1970
const toWeeks = timestamp => Math.floor((toDays(timestamp) + 3) / 7); // 1970-01-01 - Thursday (+3 days)
const weekDay = timestamp => getDay(timestamp); // 0 - Sunday

const weekDayEn = timestamp => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekDay(timestamp)];
const weekDayCn = timestamp => ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][weekDay(timestamp)];

const weekDayEnFull = timestamp => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][weekDay(timestamp)];

const monthEn = timestamp => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][getMonth(timestamp)];

const monthCn = timestamp => ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'][getMonth(timestamp)];

const monthEnFull = timestamp => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][getMonth(timestamp)];

/**
 * Get ms from start timestamp day
 * @param {number} timestamp
 * @returns {number} - Count of ms
 * */
const toMsFromStartDay = timestamp => {
  const date = new Date(timestamp);
  const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return toTime(date) - toTime(startDate);
};

/**
 * Add suffix to date
 * @param {number} timestamp
 * @return {string}
 */
const dayHuman = timestamp => {
  const day = getDate(timestamp);

  if ([1, 21, 31].includes(day)) return `${day}st`;
  if ([2, 22].includes(day)) return `${day}nd`;
  if ([3, 23].includes(day)) return `${day}rd`;
  return `${day}th`;
};

/**
 * Add cn suffix to date
 * @param {number} timestamp
 * @return {string}
 */
const dayHumanCn = timestamp => {
  const day = getDate(timestamp);

  return `${day} 日`
};

/**
 * Translate text from lang to ch
 * @param text
 * @param lang
 * @return {string}
 */
const tr = (text, lang = 'en') => {
  if (lang === 'en') {
    return text;
  }

  const vocabularyCh = {
    'Invalid date': 'Invalid date',
    'Right now': '活动进行中',
    Today: '今天',
    Tonight: '今晚',
    Tomorrow: '明天',
    This: '本',
    from: '',
    to: '-',
    'This weekend': '本周末',
    Next: '下',
    'Next weekend': '下个周末',
    'Every day': '每天',
    'On weekdays': '工作日',
    'On weekends': '周末',
    and: '与',
    Monday: '周一',
    Tuesday: '周二',
    Wednesday: '周三',
    Thursday: '周四',
    Friday: '周五',
    Saturday: '周六',
    Sunday: '周日'
  };

  return vocabularyCh[text] ? vocabularyCh[text] : '';
};

/**
 * Parse days to array
 * @param {string} days - Days text
 * @example 0=Monday&1=Tuesday&2=Wednesday&3=Thursday&4=Friday&5=Saturday&6=Sunday
 * @returns {string[]}
 * @example ['Monday', 'Tuesday']
 */
const parseDays = (days = '') => {
  const parseObj = qs.parse(days);

  return Object.values(parseObj);
};

/**
 * Merge two dates
 * From dateA take date (all except dateB)
 * From dateB take time (hours/minutes/seconds/milliseconds)
 * @param {number|string} dateA - Date take date (all except dateB)
 * @param {number|string} dateB - Date take time (hours/minutes/seconds/milliseconds)
 * @returns {number} - Timestamp
 */
const mergeDays = (dateA, dateB) => {
  const date1 = new Date(dateA);
  const date2 = new Date(dateB);

  date1.setHours(date2.getHours());
  date1.setMinutes(date2.getMinutes());
  date1.setSeconds(date2.getSeconds());
  date1.setMilliseconds(date2.getMilliseconds());

  return toTime(date1);
};

/**
 * Add day count to start timestamp
 * @param {number} start - Timestamp date
 * @param {number} count - Day count to adding
 * @return {number} - Timestamp
 */
const addDay = (start, count = 0) => {
  const date = new Date(start);

  return date.setDate(date.getDate() + count);
};

/**
 * Check days order like allDays
 * @param {array} allDays
 * @example ['Monday', 'Tuesday']
 * @param {array} days
 * @example ['Tuesday', 'Monday']
 * @return {boolean}
 * @example false
 */
const daysByOrder = (allDays, days) => {
  const countParseDays = days.length;
  let byOrder = true;
  let foundCount = 0;

  allDays.forEach(day => {
    const includes = days.includes(day);

    if (includes) {
      foundCount++;
    } else if (foundCount !== 0 && foundCount !== countParseDays) {
      byOrder = false;
    }
  });

  return byOrder;
};

/**
 * Get distance in a day from now to nearest day in days
 * @param {array} days
 * @example ['Monday', 'Tuesday']
 * @param {number} start - Timestamp date
 * @param {number} end - Timestamp date
 * @return {number} - Distance in a day
 */
const getNearestDay = (days, start, end) => {
  let allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let minDistance = 7;
  const currentTimestamp = toTime();
  const startDay = getDay(currentTimestamp);
  const beforeDays = allDays.slice(0, startDay);
  const afterDays = allDays.slice(startDay);
  const currentMsTime = toMsFromStartDay(currentTimestamp);
  const startMsTime = toMsFromStartDay(start);
  const endMsTime = toMsFromStartDay(end);
  const afterMidnight = endMsTime < startMsTime;
  const rightNowTime = !afterMidnight && currentMsTime <= endMsTime
    || afterMidnight && currentMsTime <= startMsTime
    || afterMidnight && currentMsTime >= startMsTime && currentMsTime >= endMsTime;

  allDays = afterDays.concat(beforeDays);

  days.forEach(day => {
    const index = allDays.indexOf(day);

    if (index === 0 && rightNowTime) {
      minDistance = index;
    } else if (index !== -1 && index !== 0 && index < minDistance) {
      minDistance = index;
    }
  });

  return minDistance;
};

/**
 * Get nearest date by repeated event from start to end in special days
 * @param {string} days
 * @example 0=Monday&1=Tuesday&2=Wednesday&3=Thursday
 * @param {number} start - Timestamp start event
 * @param {number} end - Timestamp end event
 * @returns {number} - Timestamp to nearest date
 */
const getNearestDate = (days = '', start, end) => {
  const parsed = parseDays(days);
  const daysToAdding = getNearestDay(parsed, start, end);
  const now = mergeDays(toTime(), start);

  return addDay(now, daysToAdding);
};

/**
 * Check if date plus one day is before now
 * @param {number|string} date - Date to check
 * @example 2019-04-08T13:00:00.000Z
 * @example 1554728400000
 * @returns {boolean}
 */
const isDayPast = date => {
  const currentTimestamp = toTime();
  const dateTimestamp = toTime(date);
  const datePlusDayTimestamp = addDay(dateTimestamp, 1);

  return datePlusDayTimestamp < currentTimestamp;
};

/**
 * Get time title on a specific lang from start/end timestamp date
 * @param { number } start - Timestamp event date
 * @param { number } end - Timestamp event date
 * @param { string } daysText
 * @example 0=Monday&1=Tuesday&2=Wednesday&3=Thursday&4=Friday&5=Saturday&6=Sunday
 * @param { string } lang
 * @returns { string }
 * @example Today
 * @example Right Now
 */
const getTimeTitle = (start, end, daysText = '', lang = 'en') => {
  const currentTimestamp = toTime();
  const parseWeekDay = lang === 'en' ? weekDayEnFull : weekDayCn;
  const parseMonth = lang === 'en' ? monthEn : monthCn;
  const parsed = parseDays(daysText);

  const Invalid = {
    title: `${tr('Invalid date', lang)}`,
    condition: (start, end) => end < start
  };

  const Past = {
    title: 'Past',
    condition: (start, end) => currentTimestamp > end
  };

  const RightNowRepeat = {
    title: '', // recursive like This Friday or RightNow
    condition(start, end) {
      const rightNow = currentTimestamp >= start && currentTimestamp <= end;
      const hasDays = Array.isArray(parsed) && parsed.length !== 0;
      const startDayCount = toDays(currentTimestamp) - toDays(start);
      const nearestDayCount = getNearestDay(parsed, start, end);
      const startTime = addDay(start, startDayCount + nearestDayCount);

      this.title = hasDays ? getTimeTitle(startTime, end, '', lang) : '';

      return rightNow && hasDays;
    }
  };

  const RightNow = {
    title: `${tr('Right now', lang)}`,
    condition: (start, end) => currentTimestamp >= start && currentTimestamp <= end
  };

  const Today = {
    title: `${tr('Today', lang)}`,
    condition: start => {
      const today = toDays(start) === toDays(currentTimestamp);

      return currentTimestamp < start && today && getHour(start) < 19;
    }
  };

  const Tonight = {
    title: `${tr('Tonight', lang)}`,
    condition: start => {
      const today = toDays(start) === toDays(currentTimestamp);

      return currentTimestamp < start && today && getHour(start) >= 19;
    }
  };

  const Tomorrow = {
    title: `${tr('Tomorrow', lang)}`,
    condition: start => {
      const diffDays = toDays(start) - toDays(currentTimestamp);

      return currentTimestamp < start && diffDays === 1;
    }
  };

  const ThisWeekday = {
    title: '', // like This Monday
    condition(start) {
      const sameWeek = toWeeks(start) === toWeeks(currentTimestamp);
      const isWeekday = [1, 2, 3, 4, 5].includes(getDay(start));
      const weekdayName = parseWeekDay(start);

      this.title = `${tr('This', lang)} ${weekdayName}`;

      return currentTimestamp < start && sameWeek && isWeekday;
    }
  };

  const ThisWeekend = {
    title: `${tr('This weekend', lang)}`,
    condition: start => {
      const sameWeek = toWeeks(start) === toWeeks(currentTimestamp);
      const isWeekend = [0, 6].includes(getDay(start));

      return currentTimestamp < start && sameWeek && isWeekend;
    }
  };

  const NextWeekday = {
    title: '', // like Next Tuesday
    condition(start) {
      const nextWeek = toWeeks(start) === toWeeks(currentTimestamp) + 1;
      const isWeekday = [1, 2, 3, 4, 5].includes(getDay(start));
      const weekdayName = parseWeekDay(start);

      this.title = `${tr('Next', lang)} ${weekdayName}`;

      return currentTimestamp < start && nextWeek && isWeekday;
    }
  };

  const NextWeekend = {
    title: `${tr('Next weekend', lang)}`,
    condition: start => {
      const nextWeek = toWeeks(start) === toWeeks(currentTimestamp) + 1;
      const isWeekend = [0, 6].includes(getDay(start));

      return currentTimestamp < start && nextWeek && isWeekend;
    }
  };

  const Future = {
    title: '', // like Jun 25th or Jun 25th 2020
    condition(start) {
      const moreTwoWeeks = toWeeks(start) >= toWeeks(currentTimestamp) + 2;
      const month = parseMonth(start);
      const otherYear = getFullYear(start) !== getFullYear(currentTimestamp);

      this.title = `${month} ${dayHuman(start)}${otherYear ? ` ${getFullYear(start)}` : ''}`;

      return currentTimestamp < start && moreTwoWeeks;
    }
  };

  const result = [
    Invalid,
    Past,
    RightNowRepeat,
    RightNow,
    Today,
    Tonight,
    Tomorrow,
    ThisWeekday,
    ThisWeekend,
    NextWeekday,
    NextWeekend,
    Future
  ].find(el => el.condition(start, end));

  return result ? result.title : 'Past';
};

/**
 * Get specific title from str days for repeated events
 * @param {string} str - Days string
 * @example '0=Monday&1=Tuesday&2=Wednesday&3=Thursday&4=Friday&5=Saturday&6=Sunday'
 * @param {string} lang
 * @return {string}
 * @example Monday - Friday
 */
const getWeekTitle = (str, lang = 'en') => {
  const parsed = parseDays(str);
  const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const days = allDays.filter(day => parsed.includes(day));

  if (days.length === 0) return '';

  const byOrder = daysByOrder(allDays, parsed);

  const EveryDay = {
    title: `${tr('Every day', lang)}`,
    condition: days => days.length === 7
  };

  const OneDay = {
    title: '',
    condition(days) {
      this.title = `${tr('Every', lang)} ${tr(days[0], lang)}`;

      return days.length === 1;
    }
  };

  const Weekdays = {
    title: `${tr('On weekdays', lang)}`,
    condition: days => days.length === 5 && !days.includes('Saturday') && !days.includes('Sunday')
  };

  const Weekends = {
    title: `${tr('On weekends', lang)}`,
    condition: days => days.length === 2 && days.includes('Saturday') && days.includes('Sunday')
  };

  const TwoDays = {
    title: '',
    condition(days) {
      const twoDays = days.length === 2;

      this.title = twoDays ? `${tr('Every', lang)} ${tr(days[0], lang)} ${tr('and', lang)} ${tr(days[1], lang)}` : '';

      return twoDays;
    }
  };

  const DaysByOrder = {
    title: '',
    condition(days) {
      const lastIndex = days.length - 1;
      const lastDay = days[lastIndex];
      const [startDay] = days;

      this.title = `${tr(startDay, lang)} - ${tr(lastDay, lang)}`;

      return days.length > 2 && byOrder;
    }
  };

  const DaysNotOrder = {
    title: '',
    condition(days) {
      const lastIndex = days.length - 1;
      const lastDay = days[lastIndex];
      const daysExcludeLast = days.slice(0, lastIndex);

      this.title = `${daysExcludeLast.map(day => tr(day, lang)).join(', ')} ${tr('and', lang)} ${tr(lastDay, lang)}`;

      return days.length > 2 && !byOrder;
    }
  };

  const result = [
    EveryDay,
    OneDay,
    Weekdays,
    Weekends,
    TwoDays,
    DaysByOrder,
    DaysNotOrder
  ].find(el => el.condition(days));

  return result ? result.title : '';
};

/**
 * Get human time
 * @param start
 * @param end
 * @param lang
 * @return {string}
 */
const fromToHumanTime = (start, end, lang = 'en') => {
  const firstPart = !isNaN(start)
    ? `${tr('from', lang)} ${addZero(getHour(start))}:${addZero(getMinute(start))}`
    : '';
  const secondPart = !isNaN(end)
    ? `${tr('to', lang)} ${addZero(getHour(end))}:${addZero(getMinute(end))}`
    : '';

  return `${firstPart} ${secondPart}`
};

/**
 * Get specific object with date title
 * @param {number | Date } timestamp - Date
 * @param {string} lang
 * @return {{month: string, weekDay: string, day: string}}
 */
const humanDate = (timestamp, lang = 'en') => {
  const date = toTime(timestamp);
  const isEn = lang === 'en';

  return {
    day: isEn ? dayHuman(date) : dayHumanCn(date),
    month: isEn ? monthEn(date) : monthCn(date),
    weekDay: isEn ? weekDayEn(date) : weekDayCn(date)
  }
};

/**
 * Get specific object with date full title
 * @param {number | Date } timestamp - Date
 * @param {string} lang
 * @return {{month: string, weekDay: string, day: string}}
 */
const humanDateFull = (timestamp, lang = 'en') => {
  const date = toTime(timestamp);
  const isEn = lang === 'en';

  return {
    day: isEn ? dayHuman(date) : dayHumanCn(date),
    month: isEn ? monthEnFull(date) : monthCn(date),
    weekDay: isEn ? weekDayEn(date) : weekDayCn(date)
  }
};

/**
 * Check passed date from now
 * @param {number} start - Timestamp date
 * @return {boolean}
 */
const isPassedDate = start => {
  const oneDayMs = 1000 * 60 * 60 * 24;
  const timestamp = Date.now() - oneDayMs;
  const startDate = toSeconds(start);
  const nowDate = toSeconds(timestamp);
  return nowDate > startDate;
};

/**
 * Check today date from now
 * @param {number} start - Timestamp date
 * @return {boolean}
 */
const isToday = start => {
  const currentTimestamp = Date.now();
  const startDate = toSeconds(start);
  const nowDate = toSeconds(currentTimestamp);

  return nowDate > startDate;
};

const testDate = () => {
  const days = ['Monday', 'Sunday'];
  const start = new Date(2019, 4, 3, 13, 30).getTime();
  const end = new Date(2019, 4, 4, 22).getTime();
  // const currentTimestamp = new Date().getTime();

  // const startDayCount = toDays(currentTimestamp) - toDays(start);
  // const nearestDayCount = getNearestDay(days, start, end);
  // const startTime = addDay(start, startDayCount + nearestDayCount);
  //
  // console.log('startDayCount', startDayCount);
  // console.log('nearestDayCount', nearestDayCount);
  // console.log('dayResultCount', startDayCount + nearestDayCount);
  // console.log('nextEvent', new Date(startTime));
  // console.log('title', getTimeTitle(start, end, ''));

  // var date = new Date(1970, 0, 4, 16);
  //
  // console.log('hours', toHours(date));
};

const parseTimeWord = (
  eventFrequency = '',
  startDate = '',
  days = '',
  startTime = '',
  endTime = '',
  endDate = '',
  lang = 'en'
) => {
  switch (eventFrequency) {
  case 'One day event':
    return `
        ${humanDate(new Date(startDate), lang).month}
        ${humanDate(new Date(startDate), lang).day}
        ${fromToHumanTime(new Date(startTime), new Date(endTime), lang)}
      `;
  case 'Multi day event':
    return `
        ${humanDate(new Date(startDate), lang).month}
        ${humanDate(new Date(startDate), lang).day} -
        ${humanDate(new Date(endDate), lang).month}
        ${humanDate(new Date(endDate), lang).day}
        ${fromToHumanTime(new Date(startDate), new Date(endDate), lang)}
      `;
  default:
    return `
        ${getWeekTitle(days, lang)}
        ${fromToHumanTime(new Date(startDate), new Date(endDate), lang)}
      `;
  }
}

export {
  testDate,
  addDay,
  getNearestDate,
  toTime,
  isDayPast,
  mergeDays,
  toDays,
  getTimeTitle,
  getWeekTitle,
  fromToHumanTime,
  humanDate,
  humanDateFull,
  isPassedDate,
  isToday,
  parseTimeWord
}
