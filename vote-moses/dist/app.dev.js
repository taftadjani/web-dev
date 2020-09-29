"use strict";

$(function () {
  var form = document.querySelector('.first-page-form');
  var firstPages = document.querySelectorAll('.first-page');
  var candidats = document.querySelectorAll('.candidat');
  var results = document.querySelectorAll('.result');
  var votePresidentBtns = document.querySelectorAll('.second-page-president .box-user>button');
  var voteSecretaireBtns = document.querySelectorAll('.second-page-secretaire .box-user>button');
  var votes = [];

  var clearBtns = function clearBtns(voteBtns) {
    voteBtns.forEach(function (voteBtn) {
      voteBtn.textContent = "Vote";
    });
  };

  votePresidentBtns.forEach(function (voteBtn) {
    voteBtn.addEventListener('click', function (e) {
      if (e.target.textContent === "Voted") {
        clearBtns(votePresidentBtns);
        var elt = votes.find(function (elt) {
          return elt.email === form.email.value;
        });
        elt.president = undefined;
        console.log(votes);
      } else {
        clearBtns(votePresidentBtns);
        e.target.textContent = "Voted";

        var _elt = votes.find(function (elt) {
          return elt.email === form.email.value;
        });

        _elt.president = e.target.value;
        console.log(votes);
      }
    });
  });
  voteSecretaireBtns.forEach(function (voteBtn) {
    voteBtn.addEventListener('click', function (e) {
      if (e.target.textContent === "Voted") {
        clearBtns(voteSecretaireBtns);
        var elt = votes.find(function (elt) {
          return elt.email === form.email.value;
        });
        elt.secretaire = undefined;
        console.log(votes);
      } else {
        clearBtns(voteSecretaireBtns);
        e.target.textContent = "Voted";

        var _elt2 = votes.find(function (elt) {
          return elt.email === form.email.value;
        });

        _elt2.secretaire = e.target.value;
        console.log(votes);
      }
    });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Ajout du mail dans l'array

    if (!votes.find(function (elt) {
      return elt.email === form.email.value;
    })) {
      votes.push({
        email: form.email.value,
        president: undefined,
        secretaire: undefined
      });
    }

    for (var i = 0; i < 2; i++) {
      // console.log(firstPages[i]);
      firstPages[i].classList.add('hide');
      candidats[i].classList.remove('hide'); // results[i].classList.remove('hide');
    }
  });
});