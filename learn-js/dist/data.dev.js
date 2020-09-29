"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getPremiumUsers = void 0;
var users = [{
  name: "mario",
  premium: true
}, {
  name: "luigi",
  premium: false
}, {
  name: "yoshi",
  premium: true
}, {
  name: "toad",
  premium: true
}, {
  name: "peach",
  premium: false
}, {
  name: "merde",
  premium: true
}, {
  name: "merde",
  premium: true
}, {
  name: "merde",
  premium: true
}];

var getPremiumUsers = function getPremiumUsers(users) {
  return users.filter(function (user) {
    return user.premium;
  });
};

exports.getPremiumUsers = getPremiumUsers;
var _default = users;
exports["default"] = _default;