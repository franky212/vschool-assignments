if (5 > 3) {
  console.log("is greater than");
}

if ("cat".length === 3) {
  console.log("is the length");
}

if (!("cat" === "dog")) {
  console.log("not the same");
}

var person = {
  name: "Bobby",
  age: 12
};

if (person.age > 18) {
  console.log(person.name + " is allowed to go to the movie.");
} else {
  console.log(person.name + " is not allowed to go to the movie.");
}

if (person.name.startsWith("B")) {
  console.log(person.name + " is allowed to go to the movie.");
}

if (person.age > 18 && person.name.startsWith("B")) {
  console.log(person.name + " is allowed to go to the movie.");
}

if (1 === "1") {
  console.log("strict");
} else if (1 == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
}

if ((1 <= 2 && 2 == 4) || (3 * 4 > 10 && 5 + 10 > 10)) {
  console.log("yes");
}

if (typeof("dog") === "string") {
  console.log("true");
}

if (typeof("true") === "boolean") {
  console.log("boolean");
}

if (typeof(num) === "undefined") {
  console.log("Variable is undefined");
}

function charCode(char, index) {
  return char.charCodeAt(index);
}

if (charCode("a", 0) > 96) {
  console.log("It is greater than");
} else {
  console.log("Character is not greater than.");
}

var num = 7;

switch(num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
    break;
  case 6:
    console.log("Six");
    break;
  case 7:
    console.log("Seven");
    break;
  case 8:
    console.log("Eight");
    break;
  case 9:
    console.log("Nine");
    break;
  case 10:
    console.log("Ten");
    break;
  default:
    console.log("Not a valid number");
}
