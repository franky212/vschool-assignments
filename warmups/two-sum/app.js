// Given an array of integers and a target integer, return the indices of the two numbers which add up to the target.


/*

twoSum([1,2,3], 4);
//returns [0, 2] because 1 + 3 equals 4

*/

const twoSum = (arr, num) => {
  const newArr = [];
  let temp;

  for(let i = 0; i < arr.length; i++) {

    for(let j = i; j < arr.length; j++) {

      if(arr[i] + arr[j + 1] === num) {
        newArr.push( i, j + 1 );
      }

    }
  }
  return newArr;
}

console.log(twoSum([1, 2, 3], 4));
