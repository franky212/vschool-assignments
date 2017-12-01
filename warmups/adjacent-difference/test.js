const chai = require("chai");
const assert = chai.assert;

const adjacentDifference = require("./app");

describe("Should return an array with the three adjacent elements with the longest combined length", () => {
  it("Should return ['is', 'an', 'array'] if given ['this', 'is', 'an', 'array'].", () => {
    assert.deepEqual(adjacentDifference(['this', 'is', 'an', 'array'], ['is', 'an', 'array']));
  })
});
