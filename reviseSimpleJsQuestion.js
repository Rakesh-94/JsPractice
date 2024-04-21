// Q duplicate find

// const arr = [1, 2, 34, 4, 5, 6, 6, 7, 9, 2, 4];

// const duplicat = arr.filter((item, ind, arr) => {
//   console.log(ind);
//   console.log("br");
//   console.log(arr.indexOf(item));
//   return ind !== arr.indexOf(item);
// });

// console.log(duplicat);

// indexOf method
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
// console.log(beasts.indexOf('bison', 2));
// Expected output: 4

// console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// const array = [2, 9, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1
// array.indexOf(9, 2); // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0

// Q reduce method

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10

// Q map() method
// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 4);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
