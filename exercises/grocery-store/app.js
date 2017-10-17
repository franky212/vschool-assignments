var shopper = {
  hungry: false,
  budget: 50,
  name: "Frank",
  groceryCart: ["Milk", "Eggs", "Butter"],
  pickUp: function(i) {
    console.log("You picked up " + shopper.groceryCart[i]);
  }
};

shopper.pickUp(2);
