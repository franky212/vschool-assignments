var ask = require("readline-sync");

var input = ask.question("Give me a string: ");

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

function antiCaps(str) {
  var newString = "";
  for(var i = 0; i < str.length; i++) {
    if(isCaps(str[i])) {
      newString += str[i].toLowerCase();
    } else {
      newString += str[i].toUpperCase();
    }
  }
  console.log(newString);
}

function antiCapsMap(str) {
  var strArr = str.split("");
  return strArr.map(function(letter) {
    return isCaps(letter) ? letter.toLowerCase() : letter.toUpperCase();
  }).join("");
}

console.log(antiCapsMap(input));
