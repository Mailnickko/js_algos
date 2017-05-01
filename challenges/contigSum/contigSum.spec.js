'use strict';

const solution = require('./contigSum.js');
const expect = require('chai').expect;

describe('contigSum', () => {
  it ('should return largest contiguous sum of elements in array', () => {
    expect(solution.contigSum([ 1, 2, 3 ])).to.equal(6);
    expect(solution.contigSum([4, -1, 5])).to.equal(8);
    expect(solution.contigSum([ 10, -11, 11 ])).to.equal(11);
    expect(solution.contigSum([ 1, 2, 3, -6, 4, 5, 6])).to.equal(15);
  });
});
