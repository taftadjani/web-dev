"use strict";

var cityForm = document.querySelector('form');
var card = document.querySelector('.card');
var details = document.querySelector('.card .details');
var time = document.querySelector('img.time');
var icon = document.querySelector('.icon img');

var updateUI = function updateUI(data) {
  // const cityDets = data.cityDets;
  // const weather = data.weather;
  // Destructures properties
  var cityDets = data.cityDets,
      weather = data.weather; // Update details template

  details.innerHTML = "\n    <h5 class=\"my-3\">".concat(cityDets.EnglishName, "</h5>\n    <div class=\"my-3\">").concat(weather.WeatherText, "</div>\n    <div class=\"display-4 my-4\">\n        <span>").concat(weather.Temperature.Metric.Value, "</span>\n        <span>&deg;C</span>\n    </div>"); // Update the night/day & Icon image

  var iconSrc = "img/icons/".concat(weather.WeatherIcon, ".svg");
  var timeSrc = null;
  timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);
  icon.setAttribute('src', iconSrc); // Remove the d-none class if present

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

var updateCity = function updateCity(city) {
  var cityDets, weather;
  return regeneratorRuntime.async(function updateCity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getCity(city));

        case 2:
          cityDets = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(getWeather(cityDets.Key));

        case 5:
          weather = _context.sent;
          return _context.abrupt("return", {
            cityDets: cityDets,
            weather: weather
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

cityForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Get city value

  var city = cityForm.city.value.trim();
  cityForm.reset(); // Update the ui with new city

  updateCity(city).then(function (data) {
    return updateUI(data);
  })["catch"](function (err) {
    return console.log(err);
  }); // LocalStorage

  localStorage.setItem('city', city);
});

if (localStorage.city) {
  updateCity(localStorage.city).then(function (data) {
    return updateUI(data);
  })["catch"](function (err) {
    return console.log(err);
  });
}