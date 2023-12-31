//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });

// console.log(newNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.
// let newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumbers);

//Find - find the first item that matches from an array.

// var numbers = [3, 56, 2, 48, 5];

// let newNumbers = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

var numbers = [3, 56, 2, 48, 5];

let newNumbers = numbers.findIndex(function (x) {
  return 40 < x && x < 50;
});

console.log(newNumbers);
