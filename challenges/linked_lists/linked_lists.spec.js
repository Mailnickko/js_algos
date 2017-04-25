'use strict';

const solution = require('./linked_lists.js');
const expect = require('chai').expect;

describe('linked lists', () => {
  let expected;
  let res;
  let myList;
  describe ('linked list data set', () => {

    beforeEach(() => {
      myList = new solution.LinkedList(5);
    });

    it ('should create a linked list', () => {
      expect(myList.head.value).to.equal(5);
    });

    it ('should add a node to the head and tail', () => {
      myList.addToHead(3);
      expect(myList.head.value).to.equal(3);
      expect(myList.head.next.value).to.equal(5);

      myList.addToTail(8);
      expect(myList.tail.value).to.equal(8);
    });

    it ('should check to see if a value exists in a linked list', () => {
      myList.addToHead(1);
      myList.addToHead(2);
      myList.addToHead(3);

      expect(myList.contains(2)).to.be.true;
      expect(myList.contains(99)).to.be.false;
    });

    it ('should add a node after a given node', () => {
      myList.addToTail(1);
      const targetNode = myList.head.next;
      myList.addToTail(2);
      myList.addToTail(3);

      myList.insertAfter(targetNode, 8);
      expect(targetNode.next.value).to.equal(8);
    });

    it ('should add a node before a given node', () => {
      myList.addToTail(1);
      const targetNode = myList.head.next;
      myList.addToTail(2);
      myList.addToTail(3);

      myList.insertBefore(targetNode, 8);
      expect(myList.head.next.value).to.equal(8);
    });

    it ('should remove a node after a given node', () => {
      myList.addToTail(1);
      const targetNode = myList.head.next;
      myList.addToTail(2);
      myList.addToTail(3);

      myList.removeAfter(targetNode);
      expect(targetNode.next.value).to.equal(3);
    });

    xit ('should remove a node before a given node', () => {
      myList.addToTail(1);
      myList.addToTail(2);
      const targetNode = myList.head.next.next;
      myList.addToTail(3);

      myList.removeBefore(targetNode);
      expect(myList.head.next.value).to.equal(2);
    });

    it ('should reverse a linked list', () => {
      const testList = new solution.LinkedList(1);
      testList.makeLinkedListRange(2, 4);

      testList.reverse();

      expect(testList.head.value).to.equal(4);
      expect(testList.head.next.value).to.equal(3);
      expect(testList.head.next.next.value).to.equal(2);
      expect(testList.tail.value).to.equal(1);
    });
  });
});
