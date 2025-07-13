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
