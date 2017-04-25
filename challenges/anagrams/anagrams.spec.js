'use strict';

const solution = require('./anagrams.js');
const expect = require('chai').expect;

describe('anagrams', () => {
  it ('should return all possible anagrams of a given string', () => {
    const res = solution.anagrams('abc');
    const expected = [ "abc", "acb", "bac", "bca", "cab", "cba" ];

    expect(res).eql(expected);
  });
});
