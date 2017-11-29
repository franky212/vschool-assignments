// function every(arr, f) {
//     for (let i = 0; i < arr.length; i++){
//         if (!checkTrue(arr[i])){
//             return false
//         };
//     }
//     return true;
// }

function some(f, arr) {
  for (let i = 0; i < arr.length; i++) {
    if(f(arr[i])) {
      return true;
    }
  }
  return false;
}

// function checkTrue (theSingleNumber) {
//     return typeof theSingleNumber === "number"
// }

function checkSome(theSingleNumber) {
  return theSingleNumber < 40;
}

// console.log(every([1,2,"3"], checkTrue));

console.log(some(checkSome, [39, 39, 39]));
