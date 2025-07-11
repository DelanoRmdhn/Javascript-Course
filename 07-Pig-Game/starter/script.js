'use strict';

//DOM ELEMENT SELECTIONS
//1) Players Elements
const activePlayer = document.querySelector('.player--active');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const scoreP1 = document.getElementById('score--0');
const scoreP2 = document.getElementById('score--1');

const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');

//2)Buttons Elements
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');

//3) Others
const diceImage = document.querySelector('.dice');

//4) GLOBAL VARIABLES
let dice;
let totalCurrentScore = 0;
//STARTING CONDITIONS
scoreP1.textContent = 0;
scoreP2.textContent = 0;

diceImage.classList.add('hidden');

//FUNCTIONS

//Global Functions

const diceGenerator = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  player1.classList.contains('player--active')
    ? resetCurrentScore(currentScoreP1)
    : resetCurrentScore(currentScoreP2);

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const addCurrentScore = function () {
  totalCurrentScore += dice;
  if (player1.classList.contains('player--active')) {
    currentScoreP1.textContent = totalCurrentScore;
  } else {
    currentScoreP2.textContent = totalCurrentScore;
  }
};

const resetCurrentScore = function (playerCurrentScore) {
  totalCurrentScore = 0;
  return (playerCurrentScore.textContent = 0);
};

//Callback Functions
const rollDice = function () {
  dice = diceGenerator();
  console.log(dice);

  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;

  if (dice == 1) {
    switchPlayer();
  } else {
    addCurrentScore();
  }
};

const holdScore = function () {};

//EVENT HANDLER
//Roll Dice
btnRollDice.addEventListener('click', rollDice);

//Hold Score
btnHoldScore.addEventListener('click', holdScore);
