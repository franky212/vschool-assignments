var secondsLeft = 20;

var text = document.getElementById("timer");

text.innerText = "00:00:" + secondsLeft;

var timer = setInterval(function() {
  text.innerText = "00:00:" + (secondsLeft -= 1);
  if(secondsLeft === 0) {
    clearInterval(timer);
    document.getElementById("audio").innerHTML = "<audio src='what-the.mp3' autoplay></audio>";
    document.getElementById("end-text").innerText = "we are all dead.";
  }
}, 1000);
