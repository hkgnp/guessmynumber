"use strict";

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number`;

// document.querySelector(`.number`).textContent = `13`;
// document.querySelector(`.score`).textContent = `10`;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//Implement game reset

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector(`.number`).textContent = secretNumber;
document.querySelector(`.score`).textContent = score;
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No number entered`;

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct!`;
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
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost!`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  //insert function to reset game
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
