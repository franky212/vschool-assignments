var shopper = {
  isHungry: false,
  budget: 50,
  name: "Frank",
  groceryCart: ["Milk", "Eggs", "Butter"],
  pickUp: function(i) {
    console.log("My name is: " + shopper.name);
    console.log("Are you hungry? " + shopper.isHungry);
    console.log("Your Budget: $" + shopper.budget)
    console.log("You picked up " + shopper.groceryCart[i]);
  }
};

shopper.pickUp(Math.floor(Math.random() * shopper.groceryCart.length));
