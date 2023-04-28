// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let tmp = { next: head };
  let currentCursor = tmp;

  while (currentCursor) {
    if (currentCursor?.next?.val === val) {
      currentCursor.next = currentCursor?.next?.next ?? null;
    } else {
      currentCursor = currentCursor.next;
    }
  }
  return tmp.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node7 = new ListNode(6, null);
let node6 = new ListNode(5, node7);
let node5 = new ListNode(4, node6);
let node4 = new ListNode(3, node5);
let node3 = new ListNode(6, node4);
let node2 = new ListNode(2, null);
let node1 = new ListNode(1, node2);

removeElements(node1, 2);
