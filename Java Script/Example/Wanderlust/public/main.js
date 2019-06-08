// Foursquare API Info
const clientId = 'W5BZ1H52TN2XHZRGEXA3TN5VCGWZH1C1ORKFZV1A4CLYZKAE'
const clientSecret = 'PHKTQHYNPLV23H31ROBQKTDDTK02ZU1MMEUFEI1KM2DP4M2C'
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// APIXU Info 
//API key сайта прогноза погоды
const apiKey = 'a9ac3c69cdb8499ead524551172606';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async() => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
  
  try {
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      return venues;
    }
  } catch (error) {
    console.log(error)
  }
};

const getForecast = async () => {
  const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const days = jsonResponse.forecast.forecastday;
      return days;
    }
  } catch (error) {
    console.log(error)
  }

};


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    const venueContent =  createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
    const currentDay = days[index];
    const weatherContent = createWeatherHTML(currentDay);
    $day.append(weatherContent);
  });
};

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);
