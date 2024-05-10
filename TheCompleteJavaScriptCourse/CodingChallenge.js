// JavaScript Fundamentals – Part 1

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:

// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK 😀

// ***** solving start *****

// const markWeight = 78;
// const markHeight = 1.69;

// const jonhWeight = 92;
// const jonhHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;

// const jonhWeight = 85;
// const jonhHeight = 1.76;

// const BMIsMark = markWeight / markHeight ** 2;
// const BMIsJonh = jonhWeight / jonhHeight ** 2;
// console.log(BMIsMark, BMIsJonh);

// const markHigherBMI = BMIsMark > BMIsJonh;

// console.log(typeof markHigherBMI);
// console.log(typeof "first");

// ***** solving End *****

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

// ***** solving start *****

// const markWeight = 95;
// const markHeight = 1.88;

// const jonhWeight = 85;
// const jonhHeight = 1.76;

// const BMIsMark = markWeight / markHeight ** 2;
// const BMIsJonh = jonhWeight / jonhHeight ** 2;
// console.log(BMIsMark, BMIsJonh);

// const markHigherBMI = BMIsMark < BMIsJonh;

// if (markHigherBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (markHigherBMI) {
//   console.log(`Mark's BMI ${BMIsMark} is higher than John's ${BMIsJonh}!`);
// } else {
//   console.log(`John's BMI ${BMIsJonh} is higher than Mark's ${BMIsJonh} `);
// }

// markHigherBMI
//   ? console.log(`Mark bmi ${BMIsMark} is grather than Jonh ${BMIsJonh}`)
//   : console.log(`Jonh bmi ${BMIsJonh} is grather than mark bmi ${BMIsMark}`);

// ***** solving End *****

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team,using the test data below
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// ***** solving start *****
// data1
// FirstTime
// let dolphinsFirstMatchScore = 96;
// let koalasFirstMatchScore = 88;

// SecondTime
// let dolphinsSecondMatchScore = 108;
// let koalasSecondMatchScore = 91;

// ThirdTime
// let dolphinsThirdMatchScore = 89;
// let koalasThirdMatchScore = 110;

//Q-1. Calculate the average score for each team,using the test data below

// const AverageScoreOfDolphinsTeam =
//   (dolphinsFirstMatchScore +
//     dolphinsSecondMatchScore +
//     dolphinsThirdMatchScore) /
//   3;
// console.log(AverageScoreOfDolphinsTeam);

// const AverageScoreOfKoalasTeam =
//   (koalasFirstMatchScore + koalasSecondMatchScore + koalasThirdMatchScore) / 3;
// console.log(AverageScoreOfKoalasTeam);

//Q-2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// if (AverageScoreOfDolphinsTeam == AverageScoreOfKoalasTeam) {
//   console.log("No one is winner match draw");
// } else if (AverageScoreOfDolphinsTeam > AverageScoreOfKoalasTeam) {
//   console.log("The winner is Dolphins team");
// } else {
//   console.log("The winner is Koalas team");
// }

// Q-3. Bonus1:Include a requirement for a minimum score of 100.With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// databonus1
// FirstTime
let bonusOneDolphinsFirstMatchScore = 97;
let bonusOneKoalasFirstMatchScore = 109;

// SecondTime
let bonusOneDolphinsSecondMatchScore = 112;
let bonusOneKoalasSecondMatchScore = 95;

// ThirdTime
let bonusOneDolphinsThirdMatchScore = 101;
let bonusOneKoalasThirdMatchScore = 123;

const AverageScoreOfDolphinsTeamBonus =
  bonusOneDolphinsFirstMatchScore +
  bonusOneDolphinsSecondMatchScore +
  bonusOneDolphinsThirdMatchScore;

const AverageScoreOfKoalasTeamBonus =
  bonusOneKoalasFirstMatchScore +
  bonusOneKoalasSecondMatchScore +
  bonusOneKoalasThirdMatchScore;

const winner =
  AverageScoreOfDolphinsTeamBonus > AverageScoreOfKoalasTeamBonus
    ? console.log("winner")
    : console.log("loser");

bonusOneDolphinsThirdMatchScore +
  bonusOneDolphinsSecondMatchScore +
  bonusOneDolphinsThirdMatchScore >
100
  ? console.log(winner)
  : console.log("score lessThan 100");

// ***** solving End *****

// ***** solving start *****
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀
// ***** solving End *****
