document.getElementById("mario-submit").addEventListener("click", function() {
  var goombasCaught = document.getElementById("goomba").value;
  var bobOmbCaught = document.getElementById("bob-omb").value;
  var cheepCheepCaught = document.getElementById("cheep-cheep").value;

  goombasCaught *= 5;
  bobOmbCaught *= 7;
  cheepCheepCaught *= 11;

  document.getElementById("totalPrice").innerText = "Total Price: " + (goombasCaught + bobOmbCaught + cheepCheepCaught) + " Coins";
});
