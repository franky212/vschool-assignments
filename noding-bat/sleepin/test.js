const chai = require("chai");
const assert = chai.assert;
const sleepIn = require("./app");

describe("A script to tell if it is a weekday, or it is vacation", () => {
  it("Should return true if sleepin(true, true)", () => {
    assert.isTrue(sleepIn(true, true), true);
  });
});
