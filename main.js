'use strict';
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;

let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');

const hold = document.querySelector('.btn--hold');
hold.addEventListener('click', function () {
  addTotal();
});

let diceEl = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
rollDice.addEventListener('click', rollTheDice);

const reset = document.querySelector('.btn--new');
reset.addEventListener('click', resetTheGame);

function resetTheGame() {
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}

function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function rollTheDice() {
  if (playerCheck()) {
    switchThePlayer();
  } else {
    switchThePlayer();
  }
}

function switchThePlayer() {
  let currentDice = randomNumber();
  switch (currentDice) {
    case 1:
      displayCurrentDice('src', './dice-1.png');
      changePlayers(player0, player1);
      current1.textContent = 0;
      current0.textContent = 0;
      break;
    case 2:
      displayCurrentDice('src', './dice-2.png');
      addCurrentValue(currentDice);
      break;
    case 3:
      displayCurrentDice('src', './dice-3.png');
      addCurrentValue(currentDice);
      break;
    case 4:
      displayCurrentDice('src', './dice-4.png');
      addCurrentValue(currentDice);
      break;
    case 5:
      displayCurrentDice('src', './dice-5.png');
      addCurrentValue(currentDice);
      break;
    case 6:
      displayCurrentDice('src', './dice-6.png');
      addCurrentValue(currentDice);
  }
}

function addCurrentValue(currentDice) {
  let sum = 0;
  if (playerCheck()) {
    sum += Number(current0.textContent) + currentDice;
    current0.textContent = sum;
  } else {
    sum += Number(current1.textContent) + currentDice;
    current1.textContent = sum;
  }
}

function playerCheck() {
  if (player0.classList.contains('player--active')) {
    return true;
  } else {
    return false;
  }
}

function displayCurrentDice(src, font) {
  diceEl.setAttribute(src, font);
  diceEl.classList.remove('hidden');
}

function addTotal() {
  let total0 = 0;
  let total1 = 0;
  if (playerCheck()) {
    total0 += Number(current0.textContent);
    score0El.textContent = total0;
    current0.textContent = 0;
  } else {
    total1 += Number(current1.textContent);
    score1El.textContent = total1;
    current1.textContent = 0;
  }
  changePlayers(player0, player1);
}

function changePlayers(player0, player1) {
  if (playerCheck()) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
}
