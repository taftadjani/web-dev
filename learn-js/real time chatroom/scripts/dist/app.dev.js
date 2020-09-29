"use strict";

// DOM queries
var chatList = document.querySelector('.chat-list');
var newChatForm = document.querySelector('.new-chat');
var newNameForm = document.querySelector('.new-name');
var updateMssg = document.querySelector('.update-mssg');
var rooms = document.querySelector('.chat-rooms'); //  Add a new chat

newChatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var message = newChatForm.message.value;
  chatroom.addChat(message).then(function (_) {
    return newChatForm.reset();
  })["catch"](function (err) {
    return console.log(err);
  });
}); // Update username

newNameForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Update name via chatroom

  var newName = newNameForm.name.value.trim();
  chatroom.updateName(newName); // Reset the form

  newNameForm.reset(); // Show then hide the update message

  updateMssg.innerText = "Your name was updated to ".concat(newName);
  setTimeout(function () {
    return updateMssg.innerText = '';
  }, 3000);
}); // Update the chat room

rooms.addEventListener('click', function (e) {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(function (data) {
      return chatUI.render(data);
    });
  }
}); // Check localStorage for a name

var username = localStorage.username ? localStorage.username : "anon"; // Class instance

var chatUI = new ChatUI(chatList);
var chatroom = new Chatroom('gaming', username); // Get chat and render

chatroom.getChats(function (data) {
  return chatUI.render(data);
});