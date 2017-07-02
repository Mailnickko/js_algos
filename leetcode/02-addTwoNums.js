// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

var addTwoNumbers = function(l1, l2) {

  if (!l1 || !l2) {
    return l1 || l2;
  }

  let dummy = new ListNode(0);
  let curr = dummy;
  let n1 = l1;
  let n2 = l2;
  let carry = 0;
  let n1Val;
  let n2Val;
  let newNode;
  let sum;

  while (n1 || n2) {
    n1Val = n1 ? n1.val : 0;
    n2Val = n2 ? n2.val : 0;

    if (n1) {
      n1 = n1.next;
    }

    if (n2) {
      n2 = n2.next;
    }

    sum = n1Val + n2Val + carry;
    newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    curr.next = newNode;
    curr = curr.next;
  }
  // handle cases where there is we're at last elements but still need to add carry
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};
