function disemvowel(str) {
  arr = str.split("");
  return arr.reduce((prev, currentChar) => {
    let c = currentChar.toLowerCase();
    if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      prev.vowels += c;
    } else {
      prev.str += c;
    }
    return prev.replace(" ", "");
  }, {str: "", vowels: ""});
}

console.log(disemvowel("Pickle Rick!"));
