const matching = str => {
  const newArr = str.split(" ");
  let temp;
  const repeated = [];
  for(let i = 0; i < newArr.length; i++) {
    temp = newArr[i];
    for(let j = i; j < newArr.length; j++) {
      if(repeated.includes(temp)) {
        break;
      } else if(temp === newArr[j + 1]) {
        repeated.push(temp);
      }
    }
  }
  return repeated;
}

module.exports = matching;
