var assert = require('chai').assert;
// var map = require('map');

describe('Map', function () {

  it('should return an array of the length of each word', function () {
    var words = ['float', 'chrysalis', 'butterfly', 'buzzing']; // Do not change this line

    var wordLengths = words.map(i => i = i.length ); // Write your code here to pass the assertions below

    assert.deepEqual(words, ['float', 'chrysalis', 'butterfly', 'buzzing']);  // Do not change this line
    assert.deepEqual(wordLengths, [5, 9, 9, 7]);  // Do not change this line
  });


});

// var assert = require('chai').assert;
// var map = require('../map');

// describe('Map', function () {
//   it('should return hello', function () {
//     assert.equal(map(), 'hello');
//   })
// })
