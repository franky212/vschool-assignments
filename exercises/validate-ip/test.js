var chai = require("chai");
var assert = chai.assert;
var validIp = require("./app");

describe("Given a string write a function that determines whether it is a valid IP address.", function() {
  it("Should check to see if number is between 0 to 255", function() {
    assert.isTrue(validIp("255.0.255.0"));
  });
  it("Should return false if string is not valid", function() {
    assert.isNotTrue(validIp("255255255255"));
  });
  it("Should return false if string contains letters, or spaces", function() {
    assert.isNotTrue(validIp("255 256 256 125"));
  });
  it("Should return false if it contains characters", function() {
    assert.isNotTrue(validIp("wat idk lmk lol"));
  });
  it("Should return true if it is valid", function() {
    assert.isTrue(validIp("172.16.254.1"));
  });
});
