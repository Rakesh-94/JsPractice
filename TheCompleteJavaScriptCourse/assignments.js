// JavaScript Fundamentals – Part 1 LECTURE: Values and Variables
// 1. Declare variables called 'country' , 'continent' and 'population' and assign their values according to your own country (population in millions)

// ***** solving Start *****
// let country, continent, population;
// country = "india";
// continent = "Asia";
// population = "1450M";

// 2. Log their values to the console

// console.log("country", country);
// console.log("continent", continent);
// console.log("population", population);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// const isIsland = false;
// let language;

// 2. Log the types of 'isIsland','population','country' and 'language' to the console

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// ***** solving End *****

// ***** solving Start *****

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// language = "Hindi";

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// const country = "Portugal";
// const continent = "Europe";
// const isIsland = false;

// 3. Try to change one of the changed variables now, and observe what happens
// isIsland = true;
// console.log(isIsland);
// ***** solving End *****

// ***** solving Start *****

// LECTURE: Basic Operators
// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
// const population = "1450M";
// console.log(population / 2);

// 2. Increase the population of your country by 1 and log the result to the console
// const population = 1450;
// population++;
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// const india = 1500;
// const finland = 6;
// india > finland ? console.log("india has more peaple than finlad", india) : console.log("finland", finland);
// 4. The average population of a country is 33million people. Does your country
// have less people than the average country?

// const aCountry = 33;
// const india = 1500;

// const isGrater = india > aCountry ? "Yes" : "No";
// console.log("isGrater", isGrater);

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
// const country = "india";
// const papulation = 1100;
// const language = "hindi";
// const continent = "asia";
// const description = `${country} is in ${continent}, and its ${papulation} million people speak ${language}`;
// console.log(description);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;;
// console.log(description);

// ***** solving End *****

// ***** solving Start *****
// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greaterthat 33million,log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// const aCountry = 33;

// const india = 1500;
// if (india > aCountry) {
//   console.log(`${india} population is above average`);
// } else {
//   console.log(`${india} population is 1510 million below average`);
// }
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

// const aCountrypopu = 33;
// // const indiapopu = 13;
// const indiapopu = 130;
// const country = "india";

// if (indiapopu > aCountrypopu) {
//   console.log(`${country} population is above the average`);
// } else {
//   console.log(
//     `${country} population is ${
//       aCountrypopu - indiapopu
//     } million below the average`
//   );
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

// 2. Execute the operations to check if you were right

// console.log(9 - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" > 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// console.log(numNeighbours);

// 2. If the reisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
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
// if (country == "India" && language == "English" && !isIsland) {
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
// const country = "india";
// const papulation = 13;
// const papulation = 130;

// console.log(
//   `${country}'s population is ${papulation >= 33 ? "above" : "below"} average`
// );

// ***** solving End *****

// JavaScript Fundamentals – Part 2
// Note: Please start Part 2 from scratch and comment out all the code from Part 1.

// ***** solving Start *****

// LECTURE: Functions
// 1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const country = "india";
// const population = 1450;
// const capitalCity = "delhi";

// const describeLog = describeCountry(country, population, capitalCity);
// console.log(describeLog);

// 2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console

// const india = describeCountry("india", 1450, "delhi");

// const pakistan = describeCountry("pakistan", 242, "Islabambad");

// const china = describeCountry("china", 1600, "beijing");

// console.log(india, pakistan, china);

// ***** solving End *****

// ***** solving Start *****

// LECTURE: Function Declarations vs. Expressions
// 1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

function percentageOfWorld1(countryPapulation) {
  let percentages = (countryPapulation / 7900) * 100;
  return percentages;
}

const populationPersentage = percentageOfWorld1(1441);
console.log(populationPersentage);

// 2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
// 3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
// 4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// ***** solving End *****
