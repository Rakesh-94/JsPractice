// JavaScript Fundamentals – Part 1 LECTURE: Values and Variables
// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)

// ***** solving Start *****
// let country, continent, population;
// country = "india";
// continent = "Asia";
// population = "13M";

// 2. Logtheirvaluestotheconsole

// console.log("country", country);
// console.log("continent", continent);
// console.log("population", population);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Data Types
// 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// const isIsland = false;
// let language;

// 2. Logthetypesof'isIsland','population','country'and'language' to the console

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// ***** solving End *****

// ***** solving Start *****

// LECTURE: let, const and var
// 1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
// language = "Hindi";

// 2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
// const population = "13M";
// console.log(population);

// 3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens
// population = "14M";
// console.log(population);
// ***** solving End *****

// ***** solving Start *****

// LECTURE: Basic Operators
// 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// const northIndia = "890M";
// const southIndia = "500M";
// console.log("northIndia", northIndia);
// console.log("southIndia", southIndia);

// 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// const northIndia = 890;
// const southIndia = 500;
// console.log("northIndia", northIndia + 1);
// console.log("southIndia", southIndia + 1);
// 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// Finland?
// const india = 1500;
// const finland = 5;
// india > finland ? console.log("india has more peaple than finlad", india) : console.log("finland", finland);
// 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// have less people than the average country?

// const aCountry = 33;
// const india = 1500;

// const isGrater = india > aCountry ? "Yes" : "No";
// console.log("isGrater", isGrater);

// 5. Basedonthevariablesyoucreated,createanewvariable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

// const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// console.log(description);

// ***** solving End *****

// ***** solving Start *****
// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greaterthat 33million,log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// const aCountry = 33;

// const india = 1500;
// if (india > aCountry) {
//   console.log(`india's population is above average`);
// } else {
//   console.log(`india's population is 1510 million below average`);
// }
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

// const aCountry = 33;
// // const india = 13;
// const india = 130;

// if (india > aCountry) {
//   console.log(`india's population is above the average`);
// } else {
//   console.log(`india's population is 13 million below the average`);
// }

// ***** solving End *****

// ***** solving Start *****
// LECTURE: Type Conversion and Coercion
// 1. Predicttheresultofthese5operationswithoutexecutingthem:
//      '9' - '5'; => "4"
//      '19' - '13' + '17'; =>"617"
//      '19' - '13' + 17; =>"617"
//      '123' < 57; => false
//      5 + 6 + '4' + 9 - 4 - 2; =>1143

// 2. Executetheoperationstocheckifyouwereright

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log(123 < "57");
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// ***** solving End *****

// ***** solving Start *****

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// console.log(numNeighbours);

// 2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours == 1) {
//   console.log("Only1border!");
// }

// 3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// }
// 4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// 5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// 6. Change==to===,andtestthecodeagain,withthesamevaluesof
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// 7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
// when you input 1
// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// 8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
// situation

// The === operator checks for both value and type equality. This means it will only consider two values equal if they are of the same type and have the same value.
// using the === operator and type conversion promotes code reliability, readability, and predictability, reducing the risk of errors and making the code easier to maintain

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Logical Operators
// 1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
// i have already comment previous code
// 2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
// country that speaks english, has less than 50 million people and is not an
// island.

// const country = "India";
// const language = "English";
// const isIsland = false;
// const population = 1450;

// 3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// if (country == "India" && language == "English") {
//   console.log(
//     ` ${country} is a country which has also ${language} language, it is right place to live for sarah`
//   );
// } else {
//   console.log("it is not for sarah");
// }
// 4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
// not, log 'Portugal does not meet your criteria :('

// const country = "India";
// const language = "Hindi";
// const isIsland = false;
// const population = 1450;

// if (country == "India" && language == "english") {
//   console.log(`You should live in india`);
// } else {
//   console.log("Indai does not meet your criteria");
// }

// 5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
// change some variables in order to make the condition true (unless you live in Canada :D)

// const country = "India";
// const language = "English";
// const isIsland = false;
// const population = 50;
// if (
//   country == "India" &&
//   language == "English" &&
//   population == 50 &&
//   isIsland == false
// ) {
//   console.log(`You should live in india`);
// } else {
//   console.log("India does not meet your criteria");
// }
// ***** solving End *****

// ***** solving Start *****
// LECTURE: The switch Statement
// 1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

// const language = "mandarin";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4'");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//   default:
//     console.log(`Great language too :${language}`);
// }

// ***** solving End *****

// ***** solving Start *****

// LECTURE: The Conditional (Ternary) Operator
// 1. Ifyourcountry'spopulationisgreaterthan33million,usetheternaryoperator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

// const papulation = 1450;
// const papulation = 14;

// papulation >= 33
//   ? console.log(`india's population is above average`)
//   : console.log(` india's population is below average`);
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

const arr = [1, 2, 3, [4, [5, 6, 8]], 7, 35];
// o/p = [1,2,3,4,5,6,8,7,35]

for (let i = 0; i < arr.length; i++) {
  let newArray = [];
  console.log("p", newArray);
  if (Array.isArray(arr[i])) {
    let indexItem = arr[i];
    for (let j = 0; j < indexItem.length; j++) {}
  } else {
    newArray[i] = arr[i];
  }
  console.log("p", newArray);

  // const indexItem = i == 3 ? arr[i] : arr[i];
  //   console.log(indexItem);
  //   for (let j = 0; j < arr[3].length; j++) {
  //     console.log(`${i} to ${arr[3][j]}`);
  //   }
  //   console.log(`indexItem`, indexItem);
  //   console.log(i.length);
}
// ***** solving End *****
