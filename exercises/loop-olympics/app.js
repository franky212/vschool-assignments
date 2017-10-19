// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// console.log("");
//
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
//
// console.log("");
//
// var fruit = ["banana", "orange", "apple", "kiwi"];
//
// for (var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
//
// console.log("");
//
// var arr = [];
//
// for (var i = 0; i < 10; i++) {
//   arr.push(i);
// }
//
// console.log(arr);
//
// console.log("");
//
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
//
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//
// var fruitTwo = [];
//
// for (var i = 0; i < fruit.length; i += 2) {
//   fruitTwo.push(fruit[i]);
// }
//
// console.log(fruitTwo);

// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Beiber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladmir Putin",
//     occupation: "Politition"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];
//
// for (var i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }
//
// var names = [];
// var occupations = [];
//
// for (var i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation);
// }
//
// console.log(names);
// console.log(occupations);

// var everyOther = [];
// var everyOtherOccupation = [];
//
// for (var i = 0; i < peopleArray.length; i++) {
//   if (i % 2 === 0) {
//     everyOther.push(peopleArray[i].name);
//   } else {
//     everyOtherOccupation.push(peopleArray[i].occupation);
//   }
// }
//
// console.log(everyOther);
// console.log(everyOtherOccupation);

var matrix = [];

for (var i = 0; i < 3; i++) {
  matrix[i] = [];
  for (var j = 0; j < 3; j++) {
    matrix[i][j] = 0;
  }
}
console.log(matrix);
