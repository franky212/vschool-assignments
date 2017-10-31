var readline = require("readline-sync");

var textBlock1 = "You wake up in an old decrepit room. You try to open the door, but the door seems to be locked. You see an ominous looking hole that just doesn't look right. There's a small dresser in the middle of the room. ";

var flag = true;
var keyFound = false;
var choices = ["Put hand in hole", "Search dresser", "Open the door"];

console.log(textBlock1);

while(flag) {
  var index = readline.keyInSelect(choices, "What is your choice?");
  switch(index) {
    case 0:
      console.log("You reached into the hole? Why? You're dead now...");
      flag = false;
      break;
    case 1:
      console.log("You search the dresser, and find a key! Maybe you can open the door?");
      keyFound = true;
      break;
    case 2:
      if(keyFound === true) {
        console.log("You use the Key. The door opens, you're safe now!");
        flag = false;
        break;
      } else {
        console.log("The door is locked.");
        break;
      }
    default:
      console.log("You die because ");
      flag = false;
      break;
  }
}
