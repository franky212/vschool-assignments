const chai = require("chai");
const assert = chai.assert;
const nonStart = require("./nonStart");

describe("Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.", () => {
  it("Should return ellohere given Hello, and There", () => {
    assert.equal(nonStart("Hello", "There"), "ellohere");
  });
  it("Should return 234678 given 1234, and 5678", () => {
    assert.equal(nonStart("1234", "5678"), "234678");
  });
  it("Should return @#$^&* given !@#$, and %^&*", () => {
    assert.equal(nonStart("!@#$", "%^&*"), "@#$^&*");
  });
  it("Should return 234678 given 123 4567 8", () => {
    assert.equal(nonStart("123 4", "567 8"), "234678");
  });
});
