"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ForeCast =
/*#__PURE__*/
function () {
  function ForeCast() {
    _classCallCheck(this, ForeCast);

    this.key = "7W1ZIJWLdo1aAbGCO2hqkUYQ3VoHkPDE";
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  _createClass(ForeCast, [{
    key: "updateCity",
    value: function updateCity(city) {
      var cityDets, weather;
      return regeneratorRuntime.async(function updateCity$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.getCity(city));

            case 2:
              cityDets = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(this.getWeather(cityDets.Key));

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
      }, null, this);
    }
  }, {
    key: "getCity",
    value: function getCity(city) {
      var query, response, data;
      return regeneratorRuntime.async(function getCity$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "?apikey=".concat(this.key, "&q=").concat(city);
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch(this.cityURI + query));

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              data = _context2.sent;
              return _context2.abrupt("return", data[0]);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getWeather",
    value: function getWeather(id) {
      var query, response, data;
      return regeneratorRuntime.async(function getWeather$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              query = "".concat(id, "?apikey=").concat(this.key);
              _context3.next = 3;
              return regeneratorRuntime.awrap(fetch(this.weatherURI + query));

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              data = _context3.sent;
              return _context3.abrupt("return", data[0]);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }]);

  return ForeCast;
}();