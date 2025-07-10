"use stirct";

//Function declaration (fungsi deklarasi)

function fruitProcessor(manggo, banana) {
  let juice =
    manggo != 0 && banana != 0
      ? `this juice contains ${manggo} manggo fruits and ${banana} Bananas fruit`
      : "No fruit in this juice :(";

  return juice;
}

manggoAndBanana = fruitProcessor(10, 5);
manggoJuice = fruitProcessor(100, 0);

console.log(manggoAndBanana);
console.log(manggoJuice);

//Function expression
const calcAge = function (birthyear, currentYear) {
  return currentYear - birthyear;
};

console.log(calcAge(2006, 2025));

//arrow function
const retirement = (name, age) => {
  const countRetirement = 65 - age;
  return `${name} will be retired in ${countRetirement} years.`;
};

console.log(retirement("Delano", 19));

//ARRAY
const birthYears = [2006, 1976, 1981, 2009, 2017];
let age = [];

for (let i = 0; i < birthYears.length; i++) {
  age.push(calcAge(birthYears[i], 2025));
}

console.log(age);
let deletedElement = [];

for (let i = 0; i < age.length; i++) {
  deletedElement.push(age.shift()); //
}
console.log(deletedElement);

//OBJECTS
const delano = {
  firstName: "Delano",
  lastName: "Ramadhan",
  birthYear: 2006,
  job: "Student",
  friends: ["Fairuz", "Bimo", "Dika"],
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  hasDriverLicense: function () {
    if (this.age >= 17) {
      return "has driver License";
    } else {
      return "has no driver License";
    }
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }. and he ${this.hasDriverLicense()}`;
  },

  inner: {
    name: "ilham",
    output: function () {
      thisDelano = delano;
      return `Halooooo nama saya ${
        thisDelano.firstName
      }, umur saya ${thisDelano.calcAge()} saya suka main sama ${this.name}`;
    },
  },
};
delano.calcAge();

const string = `${delano.firstName} has ${delano["friends"].length}, and his best friends is called ${delano["friends"][1]}`;
console.log(string);

console.log(delano.getSummary());

console.log(delano.inner.output());

//LOOPING

//01) FOR LOOP

const delanoArray = [
  "Delano Bariq Ramadhan",
  2025 - 2006,
  "Student",
  ["Fairuz", "Bimo", "Dika"],
];

for (let i = 0; i < delanoArray.length; i++) {
  console.log(delanoArray[i]);

  if (Array.isArray(delanoArray[i])) {
    for (let j = 0; j < delanoArray[i].length; j++) {
      console.log(delanoArray[i][j]);
    }
  }
}

//Mini case
const friendsBirhtYears = [2006, 1976, 1981, 2007, 2017];
const friendsAges = [];

for (let i = 0; i < friendsBirhtYears.length; i++) {
  friendsAges.push(calcAge(friendsBirhtYears[i], 2025));
}

console.log(friendsAges);

for (let i = 0; i < 3; i++) {
  console.log(`------ Aktivitas saya ke-${i + 1}`);

  for (let j = 0; j < 5; j++) {
    if (i === 0) {
      console.log(`🚲 Bersepeda sebanyak ${j + 1} kali`);
    } else if (i === 1) {
      console.log(`🏊‍♂️ Berenang sebanyak ${j + 1} kali`);
    } else {
      console.log(`Mencuci piring ...... ${j + 1} kali`);
    }
  }
}

//02) WHILE LOOP

let randomNum;
let counter = 0;

while (randomNum !== 6) {
  randomNum = Math.trunc(Math.random() * 6) + 1;
  counter++;

  if (randomNum === 6 && counter == 1)
    console.log(
      `Sangat Beruntung!!! kamu Dapat angka 6 setelah ${counter} repetisi perulangan....`
    );
  else console.log(`Belum beruntung kamu dapat angka ${randomNum}`);
}
