"use strict";

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

let countTip;
const calcTip = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      countTip = bills[i] * (15 / 100);
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

//CHALLANGES 3

/* 
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

//buat object mark & john
const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

//deklarasikan method calcBmi
mark.calcBMI();
john.calcBMI();

const higherBmi = function () {
  return john.bmi > mark.bmi
    ? `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`
    : `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`;
};

console.log(higherBmi());

/* 
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const billsData = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

let countsTip;
const calcTip2 = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      countsTip = bills[i] * (15 / 100);
      tips.push(countsTip);
      totals.push(bills[i] + tips[i]);
    } else {
      countsTip = bills[i] * (20 / 100);
      tips.push(countsTip);
      totals.push(bills[i] + tips[i]);
    }
  }
};

calcTip2(billsData);

const countAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(tips, totals);
console.log(countAvg(totals));
console.log(countAvg(tips));
