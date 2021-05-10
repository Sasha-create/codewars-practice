// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  if (str.length == 0) {
    return [];
  }

  return (str.length % 2 ? str + "_" : str).match(/../g);
}

//Variation1
// function solution(s) {
//   return (s + "_").match(/.{2}/g) || [];
// }

//Variation2
// const solution = (str) => (str + "_").match(/../g) || [];

//Variation3
// function solution(str) {
//   const arr = str.split("");

//   return arr
//     .map((el, i) => el + (arr.splice(i + 1, 1)[0] || "_"))
//     .filter((el) => el);
// }

// const { assert } = require("chai");

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
