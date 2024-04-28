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

const markWeight = 95;
const markHeight = 1.88;

const jonhWeight = 85;
const jonhHeight = 1.76;

const BMIsMark = markWeight / markHeight ** 2;
const BMIsJonh = jonhWeight / jonhHeight ** 2;
console.log(BMIsMark, BMIsJonh);

const markHigherBMI = BMIsMark < BMIsJonh;

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
