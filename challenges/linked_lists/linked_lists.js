'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(initVal) {
    this.head = initVal ? new Node(initVal) : null;
    this.tail = this.head;
  }

  addToHead(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  addToTail(value) {
    let newTail = new Node(value);
    if (!this.head) {
      this.head = this.tail = newTail;
      return;
    }
    this.tail.next = newTail;
    this.tail = newTail;
  }

  contains(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  insertAfter(node, val) {
    let current = this.head;
    let newNode = new Node(val);

    while (current) {
      if (current.value === node.value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertBefore(node, val) {
    let current = this.head;
    let prevNode;
    let newNode = new Node(val);

    while (current) {
      if (current.value === node.value) {
        newNode.next = current;
        prevNode.next = newNode;
        return;
      }
      prevNode = current;
      current = current.next;
    }
  }

  removeAfter(node) {
    let current = this.head;
    while (current) {
      if (current.value === node.value && current.next !== null) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // removeBefore(node) {
  //   let current = this.head;
  //   let prevNode;
  //   while (current) {
  //     if (current.value === node.value && prevNode !== null) {
  //       prevNode.next = current.next;
  //       return;
  //     }
  //     prevNode = current;
  //     current = current.next;
  //   }
  // }

  makeLinkedListRange (from, to) {
    for (let i = from; from <= to; from++) {
      this.addToTail(from);
    }
    return this;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next;

    while (current !== null) {
      if (prev === null) {
        this.tail = current;
      }
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

module.exports = {
  LinkedList,
  Node
};
