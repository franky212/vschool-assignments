var stringE = function(str) {
  if (str.match(/e/g).length >= 1 && str.match(/e/g) <= 3) {
    return true;
  } else {
    return false;
  }
};

var str = "Heelele";

console.log(str.match(/e/g).length);

console.log(stringE("Heelele"));
