'use strict';

const solution = require('./testCheck.js');
const expect = require('chai').expect;

describe('checkWorking', () => {
  it ('should check to see if it is working', () => {
    expect(solution.checkWorking()).to.be.true;
  });
});
