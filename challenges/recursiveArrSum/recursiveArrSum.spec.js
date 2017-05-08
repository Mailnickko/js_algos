'use strict';

const solution = require('./recursiveArrSum.js');
const expect = require('chai').expect;

describe('recursiveArrSum', () => {
  it ('should return the sum of all integers in nested array', () => {
    const res = solution.recursiveArrSum([ 1, 2, 3, [ 4, 5, [ 6, 7, 8 ]], 9, [[[[10]]]] ]);
    const expected = 55;

    expect(res).eql(expected);
  });
});
