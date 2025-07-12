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
let totalScoreP1 = 0;
let totalScoreP2 = 0;
let gameCondition = true;

//STARTING CONDITIONS
scoreP1.textContent = 0;
scoreP2.textContent = 0;

diceImage.classList.add('hidden');

//FUNCTIONS

//Global Functions

const diceGenerator = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const currentActivePlayer = function (player) {
  return player.classList.contains('player--active');
};

const switchPlayer = function () {
  currentActivePlayer(player1)
    ? resetCurrentScore(currentScoreP1)
    : resetCurrentScore(currentScoreP2);

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const addCurrentScore = function () {
  totalCurrentScore += dice;
  if (currentActivePlayer(player1)) {
    currentScoreP1.textContent = totalCurrentScore;
  } else {
    currentScoreP2.textContent = totalCurrentScore;
  }
};

const resetCurrentScore = function (playerCurrentScore) {
  totalCurrentScore = 0;
  return (playerCurrentScore.textContent = 0);
};

const checkWinner = function (player, score) {
  if (currentActivePlayer(player) && score >= 100) {
    player.classList.add('player--winner');
    player.classList.add('name');
    gameCondition = false;
  } else {
    switchPlayer();
  }
};

//Callback Functions
const rollDice = function () {
  if (!gameCondition) return;
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

const holdScore = function () {
  if (!gameCondition) return;
  if (currentActivePlayer(player1)) {
    totalScoreP1 += totalCurrentScore;
    scoreP1.textContent = totalScoreP1;
    checkWinner(player1, totalScoreP1);
  } else {
    totalScoreP2 += totalCurrentScore;
    scoreP2.textContent = totalScoreP2;
    checkWinner(player2, totalScoreP2);
  }
};

const newGame = function () {
  openModal();
  dice;
  totalCurrentScore = 0;
  totalScoreP1 = 0;
  totalScoreP2 = 0;
  gameCondition = true;

  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;

  if (currentActivePlayer(player2)) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }

  diceImage.classList.add('hidden');
};

//EVENT HANDLER
//Roll Dice
btnRollDice.addEventListener('click', rollDice);

//Hold Score
btnHoldScore.addEventListener('click', holdScore);

//New Game
btnNewGame.addEventListener('click', newGame);
