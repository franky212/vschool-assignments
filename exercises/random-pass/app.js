function randomPass(num) {
  var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_+|[]{}:;/><";
  var passReturn = "";
  for(var i = 0, n = str.length; i < num; i++) {
    passReturn += str.charAt(Math.floor(Math.random() * n));
  }
  return passReturn;
}

console.log(randomPass(1024));
