"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myMail = exports.addTitle = exports.styleBody = void 0;
var body = document.querySelector('body');

var styleBody = function styleBody(_) {
  body.style.background = "peachpuff";
};

exports.styleBody = styleBody;
var myMail = "taftadjani@gmail.com";
exports.myMail = myMail;

var addTitle = function addTitle(text) {
  var title = document.querySelector('h1');
  title.textContent = text;
  body.appendChild(title);
};

exports.addTitle = addTitle;