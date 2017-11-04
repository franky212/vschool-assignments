var chai = require("chai");
var assert = chai.assert;
var addWord = require("./app").addWord;
var dictionary = require("./app").lookItUp;

describe("A dictionary to add and lookup words", function() {
  it("Should store the word when added.", function() {
    addWord('apple', 'a fuzzy fruit');
    assert.equal(addWord('apple'), 'a fuzzy fruit');
  });
  it("Should return null when we lookup a word not present", function() {
    assert.isNull(lookItUp("apple"));
  });
});


//UNIT TESTING

//mocha - test runner
//chai - assertion library to physically test code

// EX: describe("description of your function", function(){
//
// })
// var chai = require('chai');
// var assert = chai.assert;
// var add = require('./app.js');
//
// describe('A function to check if two arguments add up to 4', function(){
//   it('should return true if the arguments add up to 4', function(){
//       add(2,2);
//       assert.equal(add(2,2), true);
//   });
//   it('should return false if the arguments dont add up to 4', function(){
//       add(4,1);
//       assert.equal(add(4,1), false);
//   });
// });

// var chai = require('chai');
// var assert = chai.assert;
// var palindrome = require('./app.js');
//
// describe("A function to check if the argument is the same forwards and backwards", function(){
//   it("should return true if the argument is a palindrome", function(){
//     assert.equal(palindrome('starrats'), true);
//   })
//   it("should return false if the argument is not a palindrome", function(){
//     assert.equal(palindrome('palindrome'), false);
//   })
//   it("should return true if the argument contains punctuation and is a palindrome", function(){
//     assert.equal(palindrome('taco! cat!'),
//     palindrome('tacocat'));
//   })
// })
