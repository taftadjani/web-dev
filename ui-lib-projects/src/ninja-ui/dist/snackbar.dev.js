"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./style/snackbar.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snackbar =
/*#__PURE__*/
function () {
  function Snackbar() {
    _classCallCheck(this, Snackbar);

    this.snackbar = document.createElement('div');
  }

  _createClass(Snackbar, [{
    key: "init",
    value: function init() {
      this.snackbar.classList.add('snackbar');
      document.querySelector('body').appendChild(this.snackbar);
    }
  }, {
    key: "show",
    value: function show(message) {
      var _this = this;

      this.snackbar.textContent = message;
      this.snackbar.classList.add('active');
      setTimeout(function () {
        _this.snackbar.classList.remove('active');
      }, 4000);
    }
  }]);

  return Snackbar;
}();

exports["default"] = Snackbar;