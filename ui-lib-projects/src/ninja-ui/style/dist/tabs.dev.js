"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs =
/*#__PURE__*/
function () {
  function Tabs(container) {
    _classCallCheck(this, Tabs);

    this.container = container;
    this.tabs = container.querySelector('.trigger');
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
          _this.toggleTabs(e);

          _this.toggleContent(e);
        });
      });
    }
  }, {
    key: "toggleTabs",
    value: function toggleTabs(e) {
      // remove current active classes
      this.tabs.forEach(function (tab) {
        return tab.classList.remove('actvie');
      }); // Add new active class to clicked tab

      e.target.classList.add('active');
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(e) {
      // Remove current active classes from content
      this.container.querySelectorAll('.content').forEach(function (item) {
        item.classList.remove('active');
      }); // Add new active class to content

      var selector = e.target.getAttribute('data-target');
      var content = this.container.querySelector(selector);
      content.classList.add('add');
    }
  }]);

  return Tabs;
}();

exports["default"] = Tabs;