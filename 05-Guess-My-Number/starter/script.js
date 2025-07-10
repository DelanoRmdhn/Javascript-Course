'use strict';

//Memanipulasi Elemen HTML
const winningCondition = (document.querySelector('.message').textContent =
  '🎉 Correct Number!');

console.log((document.querySelector('.number').textContent = 12));

//Memanipulasi Elemen input HTML
document.querySelector('.guess').value = 24;

//Event Click

document.querySelector('.check').addEventListener('click', function () {
  const inputNum = document.querySelector('.guess').value;
  console.log(inputNum);
});

let i = 1;
const output = function (e) {
  console.log(`tombol ${e.key} ditekan sebanyak ${i} kali.`);
  i++;
};

document.querySelector('.again').addEventListener('keydown', output);
