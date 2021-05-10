//Chess Fun #3: Chess Knight
// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example
// For cell = "a1", the output should be 2.

// For cell = "c2", the output should be 6.

// Input/Output
// [input] string cell

// String consisting of letter+number - coordinates of the knight on an 8 × 8 chessboard in chess notation.

// [output] an integer
function chessKnight(cell) {
  var posibleMoves = ([i, j]) => [
    [i - 2, j - 1],
    [i - 1, j - 2],
    [i - 2, j + 1],
    [i - 1, j + 2],
    [i + 2, j - 1],
    [i + 1, j - 2],
    [i + 2, j + 1],
    [i + 1, j + 2],
  ];
  cellCoords = cell.split("");
  cellCoords[0] = 1 + cellCoords[0].charCodeAt(0) - "a".charCodeAt(0);
  cellCoords[1] = Number(cellCoords[1]);
  return posibleMoves(cellCoords).filter(
    (c) => c[0] > 0 && c[0] < 9 && c[1] > 0 && c[1] < 9
  ).length;
}

//Variation1
// function chessKnight(cell) {
//   let twos = ["a1", "a8", "h1", "h8"];
//   let threes = ["a2", "a7", "h2", "h7", "b1", "b8", "g1", "g8"];
//   let fours = ["b2", "b7", "g7", "g2"];
//   if (twos.includes(cell)) return 2;
//   else if (threes.includes(cell)) return 3;
//   else if (
//     fours.includes(cell) ||
//     cell[0] == "a" ||
//     cell[0] == "h" ||
//     cell[1] == "1" ||
//     cell[1] == "8"
//   )
//     return 4;
//   else if (cell[0] == "g" || cell[0] == "b" || cell[1] == "2" || cell[1] == "7")
//     return 6;
//   else return 8;
// }

//Variation2
// function chessKnight(cell) {
//   let x = cell.charAt(0);
//   let y = cell.charAt(1);
//   return (
//     (x > "b" && y < "8") +
//     (x > "a" && y < "7") +
//     (x < "h" && y < "7") +
//     (x < "g" && y < "8") +
//     (x < "g" && y > "1") +
//     (x < "h" && y > "2") +
//     (x > "a" && y > "2") +
//     (x > "b" && y > "1")
//   );
// }

//Variation3
// const answers = {
//   a: [0, 2, 3, 4, 4, 4, 4, 3, 2],
//   b: [0, 3, 4, 6, 6, 6, 6, 4, 3],
//   c: [0, 4, 6, 8, 8, 8, 8, 6, 4],
//   d: [0, 4, 6, 8, 8, 8, 8, 6, 4],
//   e: [0, 4, 6, 8, 8, 8, 8, 6, 4],
//   f: [0, 4, 6, 8, 8, 8, 8, 6, 4],
//   g: [0, 3, 4, 6, 6, 6, 6, 4, 3],
//   h: [0, 2, 3, 4, 4, 4, 4, 3, 2],
// };

// function chessKnight(cell) {
//   return answers[cell[0]][+cell[1]];
// }
// describe("Basic Tests", function () {
//   it("It should works for basic tests.", function () {
//     Test.assertEquals(chessKnight("a1"), 2);

//     Test.assertEquals(chessKnight("c2"), 6);

//     Test.assertEquals(chessKnight("d4"), 8);

//     Test.assertEquals(chessKnight("g6"), 6);
//   });
// });
