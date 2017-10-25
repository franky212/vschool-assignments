document.getElementById("addButton").addEventListener("click", function() {
  var num1 = parseInt(document.getElementById("add1").value);
  var num2 = parseInt(document.getElementById("add2").value);
  document.getElementById("addAnswer").innerHTML = num1 + num2;
});

document.getElementById("subButton").addEventListener("click", function() {
  var num1 = parseInt(document.getElementById("sub1").value);
  var num2 = parseInt(document.getElementById("sub2").value);
  document.getElementById("subAnswer").innerHTML = num1 - num2;
});

document.getElementById("multiButton").addEventListener("click", function() {
  var num1 = parseInt(document.getElementById("mult1").value);
  var num2 = parseInt(document.getElementById("mult2").value);
  document.getElementById("multiAnswer").innerHTML = num1 * num2;
});
