/* eslint-disable no-confusing-arrow */
/* eslint-disable prefer-template */
// Libs
import { isNil, isEmpty } from './ramda.min'
import qs from '../libs/qs.min'

// Run fn after interval with cancel previous invocation
export const debounce = (fn, interval) => {
  let timer
  return (...args) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
    }, interval)
  }
}

export const HELP = {
  __isObject: smth => {
    const type = typeof smth
    return type === 'function' || type === 'object' && !!smth
  },
  __isArray: smth => Array.isArray(smth),
  __isString: smth => typeof smth === 'string',
  __isEmpty: thing => thing === '' || isEmpty(thing) || isNil(thing) || thing === 'none',
  // Language-related helpers
  parseByLang: (str, lang) => {
    const language = lang === '' ? 'en' : lang
    if (!HELP.__isEmpty(str)) {
      if (HELP.__isEmpty(str.split('|')[1])) return str
      return language === 'en' ? str.split('|')[0] : str.split('|')[1]
    } return ''
  },
  decideByLang: (eng, ch, lang) => {
    const language = lang === '' ? 'en' : lang
    const engTitle = !HELP.__isEmpty(eng) ? eng : ''
    const chTitle = !HELP.__isEmpty(ch) ? ch : ''
    return language === 'en' ? engTitle : chTitle
  },
  // Time-related helpers
  is24passed: date => {
    const nowDate = new Date()
    const lastDate = new Date(date)
    return ((nowDate.getTime() - lastDate.getTime()) / 1000 / 60) > 1440
  },
  parseTimestamp: timestamp => new Date(timestamp).toJSON().split('T')[0],
  parseHour: (hour, minutes) => `${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}`,
  generateTimeStamp: (time, dateObj) => {
    const hour = parseInt(time.split(':')[0])
    const minutes = parseInt(time.split(':')[1])
    return new Date(dateObj).setHours(hour, minutes)
  },
  splitFullPathByArgs: path => {
    if (!path) return null

    const [page, argumentsString] = path.split('?')
    const args = argumentsString.split('&')
      .map(str => str || null).filter(x => x)

    return { page, args }
  },
  // IDs-related helpers
  isMongoId: id => (!HELP.isWpId(id) && (!HELP.__isEmpty(String(id)) && String(id).length > 4)),
  // Other
  decodeHTMLEntities(text) {
    const entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"'],
      ['#8211', '–'],
      ['#8217', '\''],
      ['#038', '&'],
      ['#8220', '“'],
      ['#8221', '”'],
      ['#8216', '\'']
    ]

    for (let i = 0, max = entities.length; i < max; ++i) {
      // eslint-disable-next-line no-param-reassign
      text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1])
    }
    return text
  },
  findElInArray: (array, element) => array.find(value => value === element),
  cleanDuplicates: arr => arr.reduce(
    (unique, item) => unique.includes(item) ? unique : [...unique, item], []
  ),
  cleanDuplicatesByProp: (myArr, prop) => myArr.filter((obj, pos) => myArr
    .map(mapObj => mapObj[prop])
    .indexOf(obj[prop]) === pos),
  parsePath: path => {
    if (!HELP.__isEmpty(path) && path.split('/').length === 4) {
      return {
        parent: path.split('/')[1],
        child: path.split('/')[3]
      }
    }
    return { parent: 'events', child: 'index' }
  },
  getCityName: city => {
    if (city === '0898') return 'Hainan'
    if (city === '024') return 'Shenyang'
    return 'Wuhan'
  },
  parseNewLine: text => text.replace(/(?:\r\n|\r|\n)/g, '<br/>'),
  formatMoneyValues: money => Number(money).toFixed(2),
  formatDecimals: (amount = '') => {
    const [front = '', back = ''] = amount.split('.')
    return { front, back }
  },
  queryString: obj => {
    if (!obj) return ''

    const str = qs.stringify({ ...obj })
    return str
  }
}
