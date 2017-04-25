'use strict';

const solution = require('./rps_permutation.js');
const expect = require('chai').expect;

describe('rps permutation', () => {
  it ('should return all possible permutations of a given string', () => {
    const res1 = solution.rps('rps', 2);
    const res2 = solution.rps('rps', 1);
    const expected1 = [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ];
    const expected2 = ['r', 'p', 's'];

    expect(res1).eql(expected1);
    expect(res2).eql(expected2);
  });
});
