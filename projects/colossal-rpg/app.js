const ask = require("readline-sync");

console.log("\nStranger RPG\n");

console.log("In the rural town of Hawkins, Indiana, during the early 1980s; the nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy, but secretly does experiments into the paranormal and supernatural -- including those that involve human test subjects. Inadvertently, they have created a portal to an alternate dimension called 'The Upside Down'. The influence of the Upside Down starts to affect the unkowing residents of Hawkins in calamitous ways.\n");

console.log("YOU must stop this alternate dimension from leaking into your world.\n");

const name = ask.question("What is your name: ");

class Player {
  constructor(name, inventory) {
    this.name = name;
    this.hp = 1000;
    this.inventory = inventory;
  }
}

const player = new Player(name, ["Walkie Talkie"]);

const enemies = [
  {
    name: "Demogorgon",
    hp: 100,
    damage() {
      return Math.floor(Math.random() * 20);
    }
  },
  {
    name: "Demodog",
    hp: 100,
    damage() {
      return Math.floor(Math.random() * 15);
    }
  },
  {
    name: "Steve Harrington",
    hp: 100,
    damage() {
      return Math.floor(Math.random() * 10);
    }
  }
];

const walk = () => {
  while(player.hp > 0) {
    if(enemies.length === 0) {
      break;
    }
    const input = ask.question("Enter a 'w' to walk forward, or 'print' to see your status: ");
    if(input.toLowerCase() === 'w') {
      if(Math.random() <= 0.33) {
        let enemyIndex = Math.floor(Math.random() * enemies.length);
        let enemy = enemies[enemyIndex];
        fight(enemy);
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

const fight = (monster) => {
  const choiceArr = ["Fight", "Run"];
  let input = ask.keyInSelect(choiceArr, `Oh no a ${monster.name} appeared! What's your choice: `);
  if(input === 0) {
    while(monster.hp > 0) {
      console.log("You attacked the enemy for: " + attackEnemy(monster));
      console.log("Enemy Health: " + monster.hp);
      console.log("The enemy attacked you for: " + enemyAttack(monster));
      console.log("Your Health: " +  player.hp);
      if(monster.hp <= 0) {
        console.log("That enemy is dead.");
        enemyDie(monster);
        enemies.splice(enemies.indexOf(monster), 1);
      } else if(player.hp <= 0) {
        die();
        break;
      }
    }
  } else if(input === 1) {
    if(run()) {
      console.log("You Ran. Coward");
    } else {
      console.log("You couldn't get away COWARD!");
      fight(monster);
    }
  } else {
    console.log("There's no breaks on the Stranger train.");
  }
}

const attackEnemy = (currentEnemy) => {
  let playerDmg = Math.floor(Math.random() * 25) + 1;
  currentEnemy.hp -= playerDmg;
  return playerDmg;
}

const enemyAttack = (currentEnemy) => {
  let enemyDamage = currentEnemy.damage();
  player.hp -= enemyDamage;
  return enemyDamage;
}

const die = () => {
  console.log("You failed, and 'The Upside Down' now rules over your world. GAME OVER");
}

const enemyDie = (monster) => {
  if(monster.name === 'Demogorgon') {
    console.log("The Demogorgon dropped a 'Proton Pack!' maybe you can defeat the Mind Flayer now?");
    player.inventory.push("Proton Pack");
    console.log("'Proton Pack' added to your inventory!");
  } else if(player.health < 100) {
    console.log(`You healed for: ${player.hp += 50}`);
  }
}

walk();
