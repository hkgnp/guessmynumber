"use strict";

// Define functions
let secretNumber;
const randomNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

//S et up parameters for game
randomNumber();
let score = 20;
let highscore = 0;

// Define other functions
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

displayScore(score);
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`No number entered`);

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    //check high score
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    document.getElementById(`check`).disabled = true;
    document.getElementById(`guess`).disabled = true;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? `Too low!` : `Too high!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lost!`);
      displayScore(0);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  //insert function to reset game
  score = 20;
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  randomNumber();
  displayScore(score);
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
