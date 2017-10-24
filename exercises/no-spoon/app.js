var monitor = {
  brand: "ASUS",
  screenSize: "27 inches",
  isOn: false,
  powerSwitch: function() {
    if (this.isOn) {
      this.isOn = false;
    } else {
      this.isOn = true;
    }
  }
};

var bottle = {
  brand: "Powerade",
  color: "Blue",
  filled: true,
  drink: function() {
    if (this.filled) {
      console.log("You took a drink. The bottle is no longer filled.");
      this.filled = false;
    } else {
      console.log("You took ANOTHER DRINK");
    }
  }
};

var student = {
  name: "Frank",
  height: "5'11",
  skills: ["Graphic Design", "Web Design and Development"],
  addSkill: function(skill) {
    this.skills.push(skill);
  }
};

var phone = {
  brand: "iPhone 6",
  cost: 450,
  carriers: ["Sprint", "Verizon", "AT&T", "Boost"],
  doesExist: function(year) {
    if(typeof year !== "number") {
      return "Type in your current year.";
    } else if (year >= 2014) {
      return "Yes.";
    } else {
      return "No."
    }
  }
};

var jacket = {
  brand: "H & M",
  size: "2XL",
  warm: false,
  buyNew: function() {
    if (this.warm === false) {
      return "Buy a new damn jacket.";
    } else {
      return "Your jacket is warm enough. Stop";
    }
  }
};

var desk = {
  wood: "Plywood",
  spacious: true,
  color: "JUST WOOD",
  needNew: function(flag) {
    if (flag) {
      this.spacious = true;
      return "Your desk is fine.";
    } else {
      this.spacious = false;
      return "You need a new desk.";
    }
  }
};

var case = {
  brand: "Tomtoc",
  color: "Grey",
  isProtected: true,
  getBrand: function() {
    return this.brand;
  }
};

var hub = {
  address: "150 State St #1, Salt Lake City, UT 84111",
  member: false;
  price: 80,
  pay: function(num) {
    if (num < 80) {
      this.member = false;
      return "You did not pay the full amount for membership.";
    } else {
      this.member = true;
      return "Welcome to the Salt Lake Impact Hub!"
    }
  }
};

var projecter = {
  brand: "Who knows",
  price: 400,
  isOn: true,
  powerSwitch: function() {
    if (this.isOn) {
      this.isOn = false;
      return "Turned off the projector";
    } else {
      this.isOn = true;
      return "Turned on the projector";
    }
  }
};

var floor = {
  type: "wood",
  slippery: false,
  price: 800,
  buyNew: function() {
    if (price < 400) {
      return "There is a clearance! Go buy some!";
    } else {
      return "That's too much money bruh.";
    }
  }
};
