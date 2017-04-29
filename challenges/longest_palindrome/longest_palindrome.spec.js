'use strict';

const solution = require('./longest_palindrome.js');
const expect = require('chai').expect;

describe('longest_palindrome', () => {
  it ('should longest palindrome of a given string', () => {
    const res = solution.longestPalindrome('aibohphobia');
    const res2 = solution.longestPalindrome('My dad is a racecar athlete');
    const expected = "aibohphobia";
    const expected2 = "a racecar a";

    expect(res).eql(expected);
    expect(res2).eql(expected2);
  });
});
