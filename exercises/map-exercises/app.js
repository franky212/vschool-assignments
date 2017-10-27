function doubleNumbers(arr) {
  return arr.map(function(item) {
    return item * 2;
  });
}

function stringItUp(arr) {
  return arr.map(function(item) {
    return String(item);
  });
}

function namesOnly(arr) {
  return arr.map(function(item) {
    return item.name;
  });
}

function thereIsNoSpoon(arr) {
  return arr.map(function (item) {
    return item.age > 16 ? item.name + " can go to The Matrix" : item.name + " is under age!!";
  });
}

function readyToPutInTheDOM(arr) {
  return arr.map(function (item) {
    return "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>";
  });
}

console.log(readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));
