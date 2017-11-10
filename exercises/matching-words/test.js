const chai = require("chai");
const assert = chai.assert;

const matching = require("./app");

describe("Show the repeats of a given string in an array.", () => {
  it("Should return true if a word is repeated", () => {
    assert.deepEqual(matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."), ["pull", "lever", "on", "the", "far", "right"]);
  });
});
