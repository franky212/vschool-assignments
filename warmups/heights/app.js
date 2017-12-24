function sortByHeight(arr) {
  const treePos = [];
  const heights = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      treePos.push(i);
    } else {
      heights.push(arr[i])
    }
  }
  let sortedHeights = heights.sort(function(a, b) {
    return a - b;
  });
  for(let j = 0; j < arr.length; j++) {
    if(treePos.indexOf(j) !== -1) {
      sortedHeights.splice(j, 0, -1);
    }
  }
  return sortedHeights;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
