console.log("QUIZ 1");

const country = "Indonesia";
const continent = "Asia";
let population = 300;
const isIsland = true;
const language = "Bahasa Indonesia";

console.log(country, continent, population, isIsland, language);

// QUIZ 2
let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);

let finlandPopulation = 6;

if (population > finlandPopulation) {
  console.log(`${country}'s population is above Finland's population`);
}

//quiz 3
let description = `${country} is in ${continent}, and its ${population} million people speek ${language}`;
console.log(description);

//QUIZ 4
let averagePopulation = 33;
if (population > averagePopulation) {
  console.log(`${country}'s population is ${population} million above average`);
} else {
  console.log(
    `${country}'s population is ${population} million bellow average`
  );
}

//challange
console.log("CHALLANGES #1");
let massMark = 78;
let heightMark = 1.69;

let massJohn = 95;
let heightJohn = 1.88;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

let markHigherBMI = true;

if (bmiMark > bmiJohn) {
  console.log(
    `That's ${markHigherBMI}, that Mark BMI (${bmiJohn}) is Higher than John's BMI (${bmiJohn})`
  );
} else {
  markHigherBMI = false;
  `That's ${markHigherBMI}, that Mark BMI (${bmiJohn}) is Higher than John's BMI (${bmiJohn})`;
}

//challange 2
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Koalas win the trophy`);
} else {
  console.log("Both win the trophy");
}

//Type Conversion VS Type coercion
//-conversion
let number = 24;
console.log(String(number) + "11"); // converting 24 to String manually then add 11 to it = 2411

//coercion
console.log(number + "11" - 2); // 24 + '11' = 2411 - 2 = 2409. this called coercion

//== VS ===

let nilai = 100;

let looseEquality = nilai == "100" ? "Lulus" : "Tidak Lulus";
console.log(looseEquality);

let strictEquality = nilai === "100" ? "Lulus" : "Tidak Lulus";
console.log(strictEquality);

//challange 3
let bill = 430;
let tip;

const countTip =
  bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  `The bill was ${bill}, The tip was ${countTip}, and the total value ${
    bill + countTip
  }.`
);
275;
