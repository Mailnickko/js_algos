'use strict';

const solution = require('./romanNums.js');
const expect = require('chai').expect;

describe('romanNums', () => {
  it ('should return Roman Numerals into numeral form', () => {
    expect(solution.romanNums('LX')).to.equal(60);
    expect(solution.romanNums('IV')).to.equal(4);
    expect(solution.romanNums('rand')).to.equal(null);
    expect(solution.romanNums('')).to.equal(0);
  });
});
