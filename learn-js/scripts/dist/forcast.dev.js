"use strict";

var key = "7W1ZIJWLdo1aAbGCO2hqkUYQ3VoHkPDE"; // Get wrather information

var getWeather = function getWeather(id) {
  var base, query, response, data;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          base = 'http://dataservice.accuweather.com/currentconditions/v1/';
          query = "".concat(id, "?apikey=").concat(key);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(base + query));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data[0]);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Get city information


var getCity = function getCity(city) {
  var base, query, response, data;
  return regeneratorRuntime.async(function getCity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
          query = "?apikey=".concat(key, "&q=").concat(city);
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch(base + query));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", data[0]);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// getWeather(getCity());