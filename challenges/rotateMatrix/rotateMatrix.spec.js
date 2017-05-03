'use strict';

const solution = require('./rotateMatrix.js');
const expect = require('chai').expect;
let matrix;

describe('rotateMatrix', () => {
  beforeEach(() => {
    matrix = [
      [1, 2],
      [3, 4]
    ];
  });

  it ('should return a matrix rotated to the right', () => {
    const res = solution.rotateMatrix(matrix, true);
    const expected = [
      [3, 1],
      [4, 2]
    ];

    expect(res).eql(expected);
  });

  it ('should return a matrix rotated to the right', () => {
    const res = solution.rotateMatrix(matrix);
    const expected = [
      [2, 4],
      [1, 3]
    ];

    expect(res).eql(expected);
  });
});
