'use strict';

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

//deklarasi variabel
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

//function display
const displayMassage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

//function kondisi menang
function winningCondition() {
  displayMassage('🎉 Correct Number!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  checkHighScsore();
}

//function kondisi kalah
function losingCondition() {
  displayMassage('⛔ You Lost the Game!');
  displayScore(0);
  displayNumber('❌');
}

//function cek highcsore
function checkHighScsore() {
  if (score > highScore) {
    document.querySelector('.highscore').textContent = score;
    highScore = score;
  }
}

//Event Handler 'check'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Input received!';
  } else if (guess === secretNumber) {
    winningCondition();
  } else if (guess) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      document.querySelector('.score').textContent = score;
    } else {
      losingCondition();
    }
  }
});

//callback function reset
function reset() {
  // generate ulang angka rahasia
  secretNumber = generateSecretNumber();
  score = 20; // reset skor juga

  displayMassage('Start guessing...');
  displayScore(score);
  displayNumber('?');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
}

//Even Handler again
document.querySelector('.again').addEventListener('click', reset);
