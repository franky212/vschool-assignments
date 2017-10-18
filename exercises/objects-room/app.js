var monitor = {
  brand: "ASUS",
  price: 250,
  isOn: false,
  turnOn: function() {
    monitor.isOn = true;
    console.log("Monitor is now on!");
  },
  turnOff: function() {
    monitor.isOn = false;
    console.log("Monitor is now off!");
  }
};

var chair = {
  brand: "Who knows",
  price: 50,
  isComfortable: true,
  lowerHeight: function() {
    console.log("Lowering height!");
  },
  raiseHeight: function() {
    console.log("Raising height!");
  }
};

var student = {
  name: "Frank",
  age: 24,
  isLearning: true,
  buyCoffee: function() {
    console.log("Buying coffee.");
  }
};

console.log("Monitor:");
console.log("Brand: " + monitor.brand);
console.log("Price: $" + monitor.price);
console.log("Is the monitor on? " + monitor.isOn);
monitor.turnOn();
console.log("Is the monitor on? " + monitor.isOn);

console.log("");

console.log("Chair:");
console.log("Brand: " + chair.brand);
console.log("Price: $" + chair.price);
console.log("Is the chair comfortable? " + chair.isComfortable);

for (var i = 0; i < 6; i++) {
  chair.lowerHeight();
  chair.raiseHeight();
}

console.log("Stop messing with the chair.");

console.log("");

console.log("Student:");
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("Is student learning? " + student.isLearning);
student.buyCoffee();
