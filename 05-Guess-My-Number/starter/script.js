'use strict';

//Membuat fitur input & jika user tidak menginput
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess == 0 || !guess) {
    document.querySelector('.message').textContent = '❌ No Input received!';
  }
});
