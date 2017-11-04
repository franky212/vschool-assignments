const ask = require("readline-sync");

console.log("\nStranger RPG\n");

console.log("In the rural town of Hawkins, Indiana, during the early 1980s; the nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into the paranormal and supernatural -- including those that involve human test subjects. Inadvertently, they have created a portal to an alternate dimension called 'The Upside Down'. The influence of the Upside Down starts to affect the unkowing residents of Hawkins in calamitous ways.\n");

console.log("YOU must stop this alternate dimension from leaking into your world.\n");

const name = ask.question("What is your name: ");

function Player(name, inventory) {
  this.name = name;
  this.hp = 100;
  this.inventory = inventory;
  this.damage = 20;
  this.callDustin = function() {
    this.damage *= 2;
    this.hp *= 0.5;
  }
}

const boss = {
  name: "Mind Flayer",
  hp: 200,
  damage() {
    return Math.floor(Math.random() * 50)
  }
};

const enemies = [
  {
    name: "Demogorgon",
    hp: 70,
    damage() {
      return Math.floor(Math.random() * 30);
    }
  },
  {
    name: "Demodog",
    hp: 50,
    damage() {
      return Math.floor(Math.random() * 15);
    }
  },
  {
    name: "Steve Harrington",
    hp: 1,
    damage() {
      return "I'm just a douche. Kill me";
    }
  }
];

let player = new Player(name, ["Walkie Talkie"]);

const enemyAttack = () => {
  const choiceArr = ["Fight", "Run"];
  let enemy = enemies[Math.floor(Math.random() * enemies.length)].name;
  let input = ask.keyInSelect(choiceArr, `Oh no a ${enemy} appeared! What's your choice: `);
  if(input === 0) {
    console.log("You Fought!");
  } else {
    console.log("You Ran!");
  }
}

const bossAttack = () => {
  console.log(boss.name);
}

let tempFlag = 0;

// While player is not dead
while(tempFlag < 5) {
  let input = ask.question("\nEnter a 'w' to walk forward, or 'print' to see your status: ");
  if(input.toLowerCase() === 'w') {
    if(Math.random() <= 0.33) {
      enemyAttack();
    } else if (Math.random() <= 0.15) {
      bossAttack();
    } else {
      console.log("You Walk!");
    }
    tempFlag++;
  } else if(input.toLowerCase() === "print") {
    console.log(`\nName: ${player.name}`);
    console.log(`Health Points: ${player.hp}`);
    console.log("Inventory: ");
    console.log(player.inventory);
    console.log("\n");
  } else {
    console.log("\nPlease enter a 'w' to move forward!\n");
  }
};
