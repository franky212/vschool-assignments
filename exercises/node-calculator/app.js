var ask = require("readline-sync");

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

var num1 = Number(ask.question("Please enter your first number: "));
var num2 = Number(ask.question("Please enter your second number: "));
var op = ask.question("Please enter the operation to perform (add, sub, mul, div): ");

switch(op) {
  case "add":
    console.log(add(num1, num2));
    break;
  case "sub":
    console.log(subtract(num1, num2));
    break;
  case "mul":
    console.log(multiply(num1, num2));
    break;
  case "div":
    console.log(divide(num1, num2));
}
