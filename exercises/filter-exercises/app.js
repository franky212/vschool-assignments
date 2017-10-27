function fiveAndGreaterOnly(arr) {
  return arr.filter(function(item) {
    return item > 5;
  });
}

function evensOnly(arr) {
  return arr.filter(function(item) {
    return item % 2 === 0;
  });
}

function fiveCharactersAndLessOnly(arr) {
  return arr.filter(function(item) {
    return item.length <= 5;
  });
}

function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(function(item) {
    return item.member;
  });
}

function ofAge(arr) {
  return arr.filter(function(item) {
    return item.age > 16;
  });
}

console.log(ofAge([
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
