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

const arrNum = [1, 9, 6, 4];
const sumOfNumver = (arr) => {
  return arr.reduce((prev, currt) => {
    return prev + currt;
  });
};

console.log(sumOfNumver(arrNum));
