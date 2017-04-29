'use strict';

const solution = require('./balanced_brackets.js');
const expect = require('chai').expect;

describe('balanced_brackets', () => {
  it ('should determine is a given string contains balanced brackets', () => {

    expect(solution.balancedBrackets("(x + y) - (4)")).to.be.true;
    expect(solution.balancedBrackets("(((10 ) ()) ((?)(:)))")).to.be.true;
    expect(solution.balancedBrackets("[{]}")).to.be.false;
    expect(solution.balancedBrackets("(50)(")).to.be.false;
  });
});
