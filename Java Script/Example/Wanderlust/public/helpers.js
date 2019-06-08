const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const temp_c = (temp) => Math.round(((temp-32)*5/9));


const createWeatherHTML = (currentDay) => { 
  return `<h2> High: ${temp_c(currentDay.day.maxtemp_f)}</h2>
  <h2> Low: ${temp_c(currentDay.day.mintemp_f)}</h2>
  <img src="https://${currentDay.day.condition.icon}" class="weathericon" />
  <h2>${weekDays[(new Date(currentDay.date)).getDay()]}</h2>`; 
}