var ask = require("readline-sync");

var name = ask.question("What is your first name? \n");

console.log("\nHello " + name.toUpperCase() + " it's nice to meet you!\n");

console.log("It seems like your name has " + name.length + " characters in it! That's cool.\n");

var last = ask.question("What is your last name? \n");

console.log("\nSo then your full name is " + name + " " + last + "?");

var bio = ask.question("\nGive me a short description of you! I'd love to get to know you!\n");

if(bio.length > 20) {
  console.log("\nSorry I'm so forgetful! This is what I remember \n");
  console.log(bio.substr(bio.length / 2 + "\n"));
} else {
  console.log(bio);
}

var startFrom = ask.question("\nSorry about that! Tell me where you want to start your bio from again! Pick within a range of [0 - " + bio.length + "]\n");
console.log("\nHere you go: ");
console.log(bio.substr(startFrom));
