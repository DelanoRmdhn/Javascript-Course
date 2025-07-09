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

//CHALLANGES 1
/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

const countAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverageScore1 = countAverage(44, 23, 71);
const dolphinsAverageScore2 = countAverage(65, 54, 49);

const koalasAverageScore1 = countAverage(85, 54, 41);
const koalasAverageScore2 = countAverage(23, 24, 27);

console.log(
  dolphinsAverageScore1,
  dolphinsAverageScore2,
  koalasAverageScore1,
  koalasAverageScore2
);

//Check Winner
const checkWinner = function (dolphinsAverageScore, koalasAverageScore) {
  if (dolphinsAverageScore > koalasAverageScore * 2) {
    return `Dolphins win (${dolphinsAverageScore} VS ${koalasAverageScore})`;
  } else if (koalasAverageScore > dolphinsAverageScore * 2) {
    return `Koalas win (${koalasAverageScore} VS ${dolphinsAverageScore})`;
  } else {
    return "No one Wins";
  }
};

console.log(checkWinner(dolphinsAverageScore1, koalasAverageScore1));
console.log(checkWinner(dolphinsAverageScore2, koalasAverageScore2));

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

//MINI CASE 1 : Sistem Pendaftaran,lihat,dan cari Peserta Seminar

let peserta = [];

//daftar
const daftarPeserta = function (nama) {
  return peserta.push(nama);
};

daftarPeserta("Delano");
daftarPeserta("Bariq");

const tampilkanPeserta = () => {
  for (let i = 0; i < peserta.length; i++) {
    console.log(`${i + 1}. ${peserta[i]}`);
  }
};

tampilkanPeserta();

const cekPeserta = (nama) =>
  peserta.includes(nama)
    ? `${nama} sudah terdaftar.`
    : `${nama} belum terdaftar`;

console.log(cekPeserta("Delano"));
console.log(cekPeserta("Siska"));
tampilkanPeserta();

//CHALLANGES 2
/* 

Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

const bills = [125, 555, 44];
let tip = [];
let total = [];
const calcTip = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      let countTip = bills[i] * (15 / 100);
      tip.push(countTip);
      total.push(bills[i] + countTip);
    } else {
      countTip = bills[i] * (20 / 100);
      tip.push(countTip);
      total.push(bills[i] + countTip);
    }
  }
};

calcTip(bills);
console.log("Bills : " + bills);
console.log("Tip : " + tip);
console.log("Total Price : " + total);

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
    return this.age >= 17 ? "has a Driver License" : "has no Driver License";
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
