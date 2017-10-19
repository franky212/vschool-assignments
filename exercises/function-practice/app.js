function printName(name) {
  console.log(name);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// Switch between function declarations

var sum = function(num1, num2) {
  return num1 + num2;
}

function evenOrOdd(n) {
  if(n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var stringy = function(str) {
  if(str.length <= 20) {
    return str + str;
  } else {
    return str.substr(0, (str.length / 2));
  }
}

// Optional challenge
function fibonacci(n) {
  if(n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function quadratic(a, b, c) {
  var values = [];
  var plus = ((-1 * b) + Math.sqrt(Math.pow(b, 2) - (4*a*c)) / (2 * a));
  var minus = ((-1 * b) - Math.sqrt(Math.pow(b, 2) - (4*a*c)) / (2 * a));
  values.push(plus, minus);
  return values
}

console.log(quadratic(1, 1, -1));
