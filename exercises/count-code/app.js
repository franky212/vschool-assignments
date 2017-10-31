function countCode(str) {
  var count = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.slice(i, i + 2) === 'co' && str.slice(i + 3, i + 4) === 'e') {
      count++;
    }
  }
  // var arr = str.match(/co/g);
  // console.log(arr.length);
  return count;
}

countCode("cozexxcope");
