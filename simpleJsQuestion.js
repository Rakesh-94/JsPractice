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
