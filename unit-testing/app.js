var palindrome = function(str) {
  var newStr = str.replace(/\W/g, '');
  var strArr = newStr.split('');
  var reverseArr = strArr.reverse();
  var reverseStr = reverseArr.join("").toLowerCase();
  if(reverseStr === newStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
