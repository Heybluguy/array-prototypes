var assert = require('chai').assert;

describe('Map', function () {

  it('should return an array of the length of each word', function () {
    var words = ['float', 'chrysalis', 'butterfly', 'buzzing'];
    var wordLengths = words.map(i => i = i.length );

    assert.deepEqual(words, ['float', 'chrysalis', 'butterfly', 'buzzing']);
    assert.deepEqual(wordLengths, [5, 9, 9, 7]);
  });


});
