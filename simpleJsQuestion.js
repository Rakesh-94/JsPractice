//Q: find duplicate
const array = [1, 2, 3, 4, 5, 6, 2, 4];

const duplicate = array.filter((item, index, arr) => {
  return index !== arr.indexOf(item);
});

console.log(duplicate);
