var djElement = document.getElementById("square");

function turnBlue() {
  djElement.style.backgroundColor = "blue";
}

function turnRed() {
  djElement.style.backgroundColor = "red";
}

function turnYellow() {
  djElement.style.backgroundColor = "yellow";
}

function turnGreen() {
  djElement.style.backgroundColor = "green";
}

function turnOrange() {
  djElement.style.backgroundColor = "orange";
}

djElement.addEventListener("mouseover", turnBlue);
djElement.addEventListener("mousedown", turnRed);
djElement.addEventListener("mouseup", turnYellow);
djElement.addEventListener("dblclick", turnGreen);
// djElement.addEventListener("scroll", turnOrange);

document.addEventListener("keydown", function(e) {
  var keyCode = e.which;
  switch(keyCode) {
    case 66:
      turnBlue();
      break;
    case 82:
      turnRed();
      break;
    case 89:
      turnYellow();
      break;
    case 71:
      turnGreen();
      break;
    case 79:
      turnOrange();
      break;
    default:
      console.log("No valid key pressed");
  };
});
