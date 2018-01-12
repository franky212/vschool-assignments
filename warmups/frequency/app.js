// function countStrings(arr) {
//   let mostFrequentCounter = 1;
//   let mostFrequentString = arr[0];
//
//   for(let i = 0; i < arr.length; i++) {
//     let frequency = 0;
//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         frequency++;
//       }
//     }
//     if(frequency > mostFrequentCounter) {
//       mostFrequentCounter = frequency;
//       mostFrequentString = arr[i];
//     }
//   }
//   return mostFrequentString;
// }

function countStrings(arr) {
  let counterObject = arr.reduce((prev, str) => {
    console.log("prev: ", prev);
    console.log("str: ", str);
    if(prev[str]) {
      prev[str]++;
      return prev;
    } else {
      prev[str] = 1;
      return prev;
    }
  }, {});
  // for(let i = 0; i < arr.length; i++) {
  //   if(counterObject[arr[i]]) {
  //     counterObject[arr[i]]++
  //   } else {
  //     counterObject[arr[i]] = 1;
  //   }
  // }

  return counterObject;
}

console.log(countStrings(["dog", "cat", "mouse", "cat", "mouse", "cat"]));
