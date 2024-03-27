//Q: find duplicate

// const array = [1, 2, 3, 4, 5, 6, 2, 4];

// const duplicate = array.filter((item, index, arr) => {
//   return index !== arr.indexOf(item);
// });

// console.log(duplicate);

// Q how to find max and min value in a given array

// const array = [1, 2, 3, 4, 10, 30, 22, 50, 12, 0, 89];

//Q first methods
// const max = Math.max(...array);
// const min = Math.min(...array);
// console.log(max, min);

// function maxMin(arrays) {
//   return console.log(Math.max(...arrays), Math.min(...arrays));
// }
// maxMin(array);

// const max = array.reduce((prev, currt) => (prev < currt ? currt : prev));
// console.log(max);

//Q waht is the difference between "==" and "===" imn javascript
// Both are comparison operator
// The difference between both the operators is that "==" is used to compare values whereas "===" is used to compare both value and types
// x = 5;
// y = "5";
// console.log(x == y);

// Q How to find second larget value and remove first larget value in array

// steps1: find Largest value from array
// step2: find index of largest value
// step3: Delete index from Array using splice method
//  step4: Apply same logic that use for fine largest value

// const array = [1, 4, 5, 7, 8, 9];
// const sendLargestValue = (array) => {
//   const firstLargestValue = Math.max(...array);
//   const largestValueIndex = array.indexOf(firstLargestValue);
//   array.splice(largestValueIndex, 1);
//   const secondLargestValue = Math.max(...array);
//   return secondLargestValue;
// };
// console.log(sendLargestValue(array));

// Q Diffrence between Filter and Find Method

// => filter() method returns the matched values in an array from the collection.
// => find() method returns the first value that matches from the collection Once it matches the value in findgins,
// it will not check the remaining values in the array collectoin

// const empArr = [
//   { name: "rakesh", age: 29 },
//   { name: "pramod", age: 29 },
//   { name: "neelesh", age: 28 },
//   { name: "rohit", age: 28 },
//   { name: "anurag", age: 27 },
//   { name: "pankaj", age: 47 },
// ];

// const filterItems = empArr.filter((item) => {
//   return item.age > 29;
// });

// console.log(filterItems);

// const empArrOther = [
//   { name: "rakesh", age: 29 },
//   { name: "pramod", age: 29 },
//   { name: "neelesh", age: 28 },
//   { name: "rohit", age: 28 },
//   { name: "anurag", age: 27 },
// ];

// const filterItemsOther = empArrOther.find((item) => {
//   return item.age > 28;
// });

// console.log(filterItemsOther);

// how to find the missing number in a given interger array of 1 to 10

// const arr = [1, 2, 3, 7, 8, 9, 10];
// const missingNumber = [];
// const minNumber = Math.min(...arr);
// const maxNumber = Math.max(...arr);

// for (let i = minNumber; i < maxNumber; i++) {
//   if (arr.indexOf(i) < 0) {
//     missingNumber.push(i);
//   }
// }

// console.log(arr);
// console.log(minNumber);
// console.log(maxNumber);
// console.log(missingNumber);

// Q how to find even or odd number in a given array in javaScript

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = arr.filter((item) => item % 2 === 0);
// const odd = arr.filter((item) => item % 2 !== 0);

// console.log(even);
// console.log(odd);

// how to find the sum of all elements in agiven array[] in javascript

// const arrNum = [1, 9, 6, 4];
// const sumOfNumver = (arr) => {
//   return arr.reduce((prev, currt) => {
//     return prev + currt;
//   });
// };

// console.log(sumOfNumver(arrNum));

// how to find factorial(n!) of a given number in javascript

// * The factorial of a number is the product of all number from 1 to that number
// for example: factorial of 5 is equal to 5! = 1*2*3*4*5= 120
// factorial of negative number is not possibale

// const inputNum = prompt("please enter number");

// const inputNum = 6;
// let fact = 1;
// if (inputNum < 0) {
//   console.log(`Factorial of ${inputNum} is not possible`);
// } else {
//   for (let i = 1; i <= inputNum; i++) {
//     fact = fact * i;
//   }
//   console.log(`factorial of ${inputNum} is ${fact}`);
// }

// let number = 2;

// if (number == 1) {
//   console.log(`${number} is not a prime nither a composit`);
// } else if (number < 1) {
//   console.log(`prime no of ${number} is not possible`);
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       console.log(`${number} is not prime number`);
//       break;
//     } else {
//       console.log(`${number} is prime number`);
//     }
//   }
// }

// let number = 2;
// let isPrime = true;

// if (number == 1) {
//   console.log(`${number} is not a prime neither a composite`);
// } else if (number < 1) {
//   console.log(`Prime number for ${number} is not possible`);
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is not a prime number`);
//   }
// }

//Q how to find vowels form sting i js
// first method
// const vowel = "e";
// if (
//   vowel == "a" ||
//   vowel == "e" ||
//   vowel == "i" ||
//   vowel == "o" ||
//   vowel == "u"
// ) {
//   console.log("this is vovel");
// } else {
//   console.log("this is not vovel");
// }

// second method

// const str
// const vowels = ["a", "e", "i", "o", "u"];
// const countVawels = (st) => {
//   let count = 0;
//   for (let letter of st.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVawels(str));

//Q capitalize first letter of each word fo a given sentence

// const str = "my name rakesh pal";
// const arr = str.split(" ");

// const mapps = arr.map((item) => item[0].toUpperCase() + item.slice(1));

// const joins = mapps.join(" ");

// console.log(joins);

// Q how to reverse a string in javascript
// const reversFun = (str) => {
//   const arr = str.split("");
//   const reversVal = arr.reverse();
//   const strVal = reversVal.join("");
//   return strVal;
// };
// const value = reversFun("rakeshpal");
// console.log(value);

// Q how to find palindrome in javascript

// what is Palindrome

// a word, verse, or sentence (such as "madam") or a number (such as 1881) that reads the same backword or forword

// const palindrom = (str) => {
//   const palindromeVal = str.split("").reverse().join("");
//   if (palindromeVal == str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(palindrom("1881"));

// Q how to swap two variable without using third variable in javascript

// let a = 7;
// let b = 8;
// with using third variable
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// without third variable
// [a, b] = [b, a];
// console.log(a, b);

//Q how to merge two arrays and short them in javascript

// const arr1 = [1, 2, 3, 4, 50, 60];
// const arr2 = [7, 8, 9, 11];

// const array = arr1.concat(arr2).sort((a, b) => a - b);
// console.log(array);

// const array1 = [...arr1, ...arr2];
// console.log(array1.sort((a, b) => a - b));

//Q how to find factors of a given integer in javascript

// const inter = 16;

// for (let i = 0; i <= inter; i++) {
//   if (inter % i === 0) {
//     console.log(i);
//   }
// }
