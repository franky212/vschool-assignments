// UNIT TESTING

// Mocha - Test Runner (runs tests)
// Chai - Test Library ()

var chai = require("chai");
var assert = chai.assert;
var palindrome = require("./app");

describe("Should return true if string is a Palindrome", function() {
  it('Should return true if string is a Palindrome', function() {
    assert.equal(palindrome("Star Rats!"), true);
  });
  it("Should return false if the arguments are not a palindrome", function() {
    assert.equal(palindrome("palindrome"), false);
  });
  it("Should return true if argument contains puncuation and is a palindrome", function() {
    assert.equal(palindrome("taco! cat!"), palindrome("tacocat"));
  });
  it("Blag", function() {
    assert.equal(palindrome("t@acO ( cA*t)"), true);
  })
});
