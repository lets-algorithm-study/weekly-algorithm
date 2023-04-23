// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1208/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let currentCursor = head;
  let oddList = { next: null };
  let evenList = { next: null };
  let oddListStart = oddList;
  let evenListStart = evenList;

  let nodeIdx = 1;
  while (currentCursor) {
    if (nodeIdx % 2 !== 0) {
      // odd
      oddList.next = currentCursor;
      oddList = oddList.next;
    } else {
      // even
      evenList.next = currentCursor;
      evenList = evenList.next;
    }

    nodeIdx++;
    currentCursor = currentCursor?.next;
  }
  evenList.next = null;
  oddList.next = evenListStart.next;

  return oddListStart.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

oddEvenList(node1);
