var readline = require("readline-sync");

var grid = [];

var hits = 0;
var misses = 0;

function Location(isShip, hit, display) {
  this.isShip = isShip;
  this.hit = hit;
  this.display = display;
}

function randomBool() {
  return Math.random() >= 0.5;
}

for(var i = 0; i < 10; i++) {
  grid.push([]);
  for(var j = 0; j < 10; j++) {
    grid[i].push(new Location(randomBool(), false, '~'));
  }
}

function displayGrid(arr) {
  var disp = [];
  for(var i = 0; i < arr.length; i++) {
    disp.push([]);
    for(var j = 0; j < arr[i].length; j++) {
      disp[i].push(arr[i][j].display);
    }
  }
  console.log(disp);
}

while(hits < 3 && misses < 20) {

  var x = readline.question("What is your first Coordinate: ");
  var y = readline.question("What is your second Coordinate: ");

  if(grid[x][y].hit || grid[x][y].display === "M") {
    console.log("\nThose coordinates were already used Captain! Please choose another!\n");
    continue;
  }

  if(grid[x][y].isShip && grid[x][y].hit === false) {
    hits++;
    console.log("\nThat's a HIT captain!");
    grid[x][y].display = "X";
    grid[x][y].isShip = false;
    grid[x][y].hit = true;
    displayGrid(grid);
  } else {
    misses++;
    console.log("\nThat's a MISS captain!");
    grid[x][y].display = "M";
    displayGrid(grid);
  }
}

if(hits === 3) {
  console.log("YOU WON.");
}
if(misses === 20) {
  console.log("git gud.");
}
