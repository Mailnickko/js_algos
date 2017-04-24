'use strict';

const solution = require('./sorts.js');
const expect = require('chai').expect;

describe('sort methods', () => {
  let res;
  const mixedArr = [99, 3, 2, 24, 19, 1];
  const mixedRadix = [999, 88, 3, 56, 10000, 2346543234, 2];
  const expectedRadix = [2, 3, 56, 88, 999, 10000, 2346543234];
  const expected = [1, 2, 3, 19, 24, 99];

  describe('bubbleSort', () => {
    it ('should return a sorted array', () => {
      res = solution.bubbleSort(mixedArr);
      expect(res).to.be.an('array');
      expect(res).eql(expected);
    });
  });

  describe('selectionSort', () => {
    it ('should return a sorted array', () => {
      res = solution.selectionSort(mixedArr);
      expect(res).to.be.an('array');
      expect(res).eql(expected);
    });
  });

  describe('insertionSort', () => {
    it ('should return a sorted array', () => {
      res = solution.insertionSort(mixedArr);
      expect(res).to.be.an('array');
      expect(res).eql(expected);
    });
  });

  describe('radixSort', () => {
    it ('should return a sorted array', () => {
      res = solution.radixSort(mixedRadix);
      expect(res).to.be.an('array');
      expect(res).eql(expectedRadix);
    });
  });

  describe('mergeSort', () => {
    it ('should return a sorted array', () => {
      res = solution.mergeSort(mixedArr);
      expect(res).to.be.an('array');
      expect(res).eql(expected);
    });
  });

  describe('quickSort', () => {
    it ('should return a sorted array', () => {
      res = solution.quickSort(mixedArr);
      expect(res).to.be.an('array');
      expect(res).eql(expected);
    });
  });
});
