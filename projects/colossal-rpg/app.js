const ask = require("readline-sync");

console.log("\nStranger RPG\n");

console.log("In the rural town of Hawkins, Indiana, during the early 1980s; the nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into the paranormal and supernatural -- including those that involve human test subjects. Inadvertently, they have created a portal to an alternate dimension called 'The Upside Down'. The influence of the Upside Down starts to affect the unkowing residents of Hawkins in calamitous ways.\n");

console.log("YOU must stop this alternate dimension from leaking into your world.\n");

const name = ask.question("What is your name: ");

let player = new Player(name, ["Walkie Talkie"]);

function Player(name, inventory) {
  this.name = name;
  this.hp = 100;
  this.inventory = inventory;
  this.damage = 20;
  this.callDustin = function() {
    this.damage *= 2;
    this.hp *= 0.5;
  }
};

const boss = {
  name: "Mind Flayer",
  hp: 200,
  damage() {
    return Math.floor(Math.random() * 50);
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
      return Math.floor(Math.random() * 0.5);
    }
  }
];

const walk = () => {
  while(player.hp > 0) {
    let input = ask.question("Enter a 'w' to walk forward, or 'print' to see your status: ");
    if(input.toLowerCase() === 'w') {
      if(Math.random() <= 0.33) {
        fight();
      } else if (Math.random() <= 0.15) {
        bossAttack();
      } else {
        console.log("You Walk!");
      }
    } else if(input.toLowerCase() === "print") {
      console.log(`\nName: ${player.name}`);
      console.log(`Health Points: ${player.hp}`);
      console.log("Inventory: ");
      console.log(player.inventory);
      console.log("\n");
    }
  }
}

const run = () => {
  return Math.random() >= 0.5;
}

const fight = () => {
  const choiceArr = ["Fight", "Run"];
  let enemy = enemies[Math.floor(Math.random() * enemies.length)];
  let input = ask.keyInSelect(choiceArr, `Oh no a ${enemy.name} appeared! What's your choice: `);
  if(input === 0) {
    while(enemy.hp > 0) {
      console.log("You attacked the enemy for: " + attackEnemy(enemy));
      console.log("Enemy Health: " + enemy.hp);
      console.log("The enemy attacked you for: " + enemyAttack(enemy));
      console.log("Your Health: " +  player.hp);
    }
  } else if(input === 1) {
    if(run()) {
      console.log("You Ran");
      // HOW TO LET THEM ESCAPE
    } else {
      console.log("You couldn't get away COWARD!");
    }
  } else {
    console.log("There's no breaks on the Stranger train.");
  }
}

const attackEnemy = (currentEnemy) => {
  currentEnemy.hp -= player.damage;
  return player.damage;
}

const enemyAttack = (currentEnemy) => {
  let enemyDamage = currentEnemy.damage();
  player.hp -= enemyDamage;
  return enemyDamage;
}

const bossAttack = () => {
  console.log(boss.name);
}

const die = () => {

}

const enemyDie = () => {

}

walk();
