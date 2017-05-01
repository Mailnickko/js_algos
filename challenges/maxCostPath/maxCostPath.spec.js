'use strict';

const solution = require('./maxCostPath.js');
const expect = require('chai').expect;
let matrix;

beforeEach(() => {
  matrix = [
    [1, 3, 5, 8],
    [4, 2, 1, 7],
    [4, 3, 2, 3]
  ];
});

describe('maxCostPath Variation 1', () => {
  it ('should return the max Cost that can be taken in an array assuming only right and down movements', () => {
    expect(solution.maxCostPathV1(matrix)).to.equal(27);
  });
});

describe('maxCostPath Variation 2', () => {
  it ('should the path to max cost in array assuming only right and down movements', () => {
    expect(solution.maxCostPathV2(matrix)).eql([1, 3, 5, 8, 7, 3]);
  });
});
