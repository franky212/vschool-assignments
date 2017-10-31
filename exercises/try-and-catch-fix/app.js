try {
  var myName = "John Doe";
  console.log(myName); // name
} catch(e) {
  console.log(e.message); // name is not defined
}

function movieCheck(age) {
  if(age < 0) {
    throw "Error cannot be less than 0";
  } else if(age <= 12) {
    console.log("You can see PG movies");
  } else if(age >= 13 && age < 18) {
    console.log("You can see PG-13 movies");
  } else if(age >= 18) {
    console.log("You can see R rated movies");
  }
}

try {
  movieCheck("hi");
} catch(e) {
  if(e instanceof TypeError) {
    console.log("This was a Type Error");
  } else if(e instanceof RangeError) {
    console.log("This was a Range Error");
  } else if(e instanceof EvalError) {
    console.log("This was an Eval Error");
  } else if(e instanceof ReferenceError) {
    console.log("This was a Reference Error");
  } else if(e instanceof String) {
    console.log("WHAT AM I DOING WITH MY LIFE");
  } else {
    console.log(e);
  }
}
