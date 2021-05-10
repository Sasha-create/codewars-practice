// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  var args = arr;
  for (var i = args.length - 1; i >= 0; i--) {
    if (args[i] === 0) {
      args.splice(i, 1);
      args.push(0);
    }
  }
  return args;
};

// console.log(JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])));

//Variation1
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

//Variation2
// var moveZeros = function (arr) {
//   var filtedList = arr.filter(function (num) {
//     return num !== 0;
//   });
//   var zeroList = arr.filter(function (num) {
//     return num === 0;
//   });
//   return filtedList.concat(zeroList);
// };

//Variation3
// var moveZeros = function (arr) {
//   return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
// };

//Variation4
// let moveZeros = (arr) =>
// arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0));

// Test.assertEquals(
//   JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
//   JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
// );
// var Dog = {
//   name: "foo",
//   age: 7,
// };
// let DogString = JSON.stringify(Dog);
// console.log(DogString);
