"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./style/dropdown.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown(container) {
    _classCallCheck(this, Dropdown);

    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }

  _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.trigger.addEventListener('click', function (_) {
        _this.trigger.classList.toggle('active');

        _this.content.classList.toggle('active');
      });
    }
  }]);

  return Dropdown;
}();

exports["default"] = Dropdown;