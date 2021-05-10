// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//Answer
// const litres = (time) => Math.floor(time * 0.5);

//Variation1
//function litres(time) {
//   return Math.floor(time/2);
// }

// describe("Fixed tests", (_) => {
//   it("Tests", (_) => {
//     Test.assertEquals(litres(2), 1, "should return 1 litre");
//     Test.assertEquals(litres(1.4), 0, "should return 0 litres");
//     Test.assertEquals(litres(12.3), 6, "should return 6 litres");
//     Test.assertEquals(litres(0.82), 0, "should return 0 litres");
//     Test.assertEquals(litres(11.8), 5, "should return 5 litres");
//     Test.assertEquals(litres(1787), 893, "should return 893 litres");
//     Test.assertEquals(litres(0), 0, "should return 0 litres");
//   });
// });

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//Answer
// const quarterOf = (month) => {
//   return Math.ceil(month / 3);
// };

// describe("Basic Tests", () => {
//   Test.assertEquals(quarterOf(3), 1);
//   Test.assertEquals(quarterOf(8), 3);
//   Test.assertEquals(quarterOf(11), 4);
// });

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Answer
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// const { assert } = require("chai");

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), "Yes");
//     assert.strictEqual(boolToWord(false), "No");
//   });
// });
