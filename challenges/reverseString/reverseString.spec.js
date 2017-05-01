'use strict';

const solution = require('./reverseString.js');
const expect = require('chai').expect;

describe('reverseString', () => {
  it ('should return reversed array', () => {
    expect(solution.reverseString('hello')).to.equal('olleh');
  });
});

describe('reverseSpecial', () => {
  it ('should return a string with only alphanumeric chars reversed', () => {
    expect(solution.reverseSpecial("Ab,c,de!$")).to.equal("ed,c,bA!$");
  });
});
