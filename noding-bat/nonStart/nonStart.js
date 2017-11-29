// Given 2 strings, return their concatenation, except omit the first char
// of each. The strings will be at least length 1.

var nonStart=function(a, b) {
  const strA = a.replace(/\s/g, "");
  const strB = b.replace(/\s/g, "");
  const newA = strA.split("");
  const newB = strB.split("");
  newA.splice(0, 1);
  newB.splice(0, 1);
  return newA.concat(newB).join("");
}

module.exports = nonStart;
