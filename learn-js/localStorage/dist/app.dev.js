"use strict";

var todos = [{
  text: ";jn cn,",
  author: "tafta"
}, {
  text: ";jn cn,",
  author: "tafta"
}, {
  text: ";jn cn,",
  author: "tafta"
}, {
  text: ";jn cn,",
  author: "tafta"
}];
localStorage.setItem('todos', JSON.stringify(todos));
console.log(JSON.parse(localStorage.todos));