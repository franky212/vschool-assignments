function sum() {
  var goombasElem = document.getElementById("goomba");
  var bobOmbElem = document.getElementById("bob-omb");
  var cheepCheepElem = document.getElementById("cheep-cheep");

  var goombasCaught = goombasElem.value;
  var bobOmbCaught = bobOmbElem.value;
  var cheepCheepCaught = cheepCheepElem.value;

  goombasCaught *= 5;
  bobOmbCaught *= 7;
  cheepCheepCaught *= 11;

  document.getElementById("totalPrice").innerText = "Total Price: " + (goombasCaught + bobOmbCaught + cheepCheepCaught) + " Coins";
}
