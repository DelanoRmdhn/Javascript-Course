'use strict';

const name = 'Delano';

const first = function () {
  let a = 2;
  let b = second(7, 5);
  return a + b;
};

function second(x, y) {
  let c = 2;
  return c;
}

const count = first();

function outer() {
  let name = 'Delano';
  return function inner() {
    let age = 19;
    console.log(`my name is ${name} im ${age} years old.`);
  };
}

const information = outer();
information();

const nama = 'ilham';
const aboutMe = function () {
  const age = 50;

  if (2025 - age <= 2012 && 2025 - age >= 1997) {
    var genZ = true; // var bisa diakses oleh function.
  }

  function log() {
    console.log(
      `nama saya ${nama}, umur saya ${age} ${
        genZ == true ? 'Generasi saya gen Z' : 'Saya bukan Gen Z'
      }.`
    );
  }
  log();
};

aboutMe();
