function printEach(str) {
  for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function tellMe(str, a) {
  var lower = str.toLowerCase();
  // Loop that iterates over string
  for(var i = 0; i < lower.length; i++) {
    if(lower[i] === a) {
      return i;
    } else {
      return "Cannot be found!";
    }
  }
}

console.log(tellMe("Frank", "f"));

function found(arr) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === 42) {
      console.log("42 has been found at index: " + i);
    } else {
      console.log("42 has NOT been found at index: " + i);
    }
  }
}

function smallest(arr) {
  var smallTemp = arr[0]; // 3
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < smallTemp) {
      smallTemp = arr[i];
    }
  }
  return smallTemp;
}
