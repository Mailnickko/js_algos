'use strict';

const solution = require('./powerSet.js');
const expect = require('chai').expect;

/*
    Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

    Make sure your code does the following:

    All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
    Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
    Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

  Ex.
  "a" => ["", "a"]
  "horse" => [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
  */

describe('powerSets', () => {
  it ('should return power set of a given string', () => {
    const res1 = solution.powerSet('a');
    const expected1 = ["", "a"];
    const res2 = solution.powerSet('horse');
    const expected2 = [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ];

    expect(res1).eql(expected1);
    expect(res2).eql(expected2);
  });
});
