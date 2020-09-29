"use strict";

var _tooltip = _interopRequireDefault(require("./ninja-ui/tooltip"));

var _dropdown = _interopRequireDefault(require("./ninja-ui/dropdown"));

var _tabs = _interopRequireDefault(require("./ninja-ui/tabs"));

var _snackbar = _interopRequireDefault(require("./ninja-ui/snackbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create a tooltip
var tooltip = new _tooltip["default"](document.querySelector('.tooltip'));
tooltip.init(); // Create dropdown

var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
  var instance = new _dropdown["default"](dropdown);
  instance.init();
}); // Create tabs

var tabs = new _tabs["default"](document.querySelector('.tabs'));
tabs.init(); // Create snackbar

var snackbar = new _snackbar["default"]();
snackbar.init();
var button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', function (_) {
  snackbar.show("You clicked me :)");
});