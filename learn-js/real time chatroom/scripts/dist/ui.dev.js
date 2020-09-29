"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Render chat templates to the DOM
// Clear the list of chats (when the room changes)
var ChatUI =
/*#__PURE__*/
function () {
  function ChatUI(list) {
    _classCallCheck(this, ChatUI);

    this.list = list;
  }

  _createClass(ChatUI, [{
    key: "clear",
    value: function clear() {
      this.list.innerHTML = "";
    }
  }, {
    key: "render",
    value: function render(data) {
      var when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
        addSuffix: true
      });
      var html = "\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<span class =\"username\">".concat(data.username, "</span>\n\t\t\t\t\t\t\t\t<span class=\"message\">").concat(data.message, "</span>\n\t\t\t\t\t\t\t\t<div class=\"time\">").concat(when, "</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t");
      this.list.innerHTML += html;
    }
  }]);

  return ChatUI;
}();