// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let set = new Set();

  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head?.next;
  }
  return false;

  // 아래는 투포인터로 해결
  // let fast = head;
  // while (fast && fast.next) {
  //   head = head.next;
  //   fast = fast.next.next;
  //   if (head === fast) return true;
  // }
  // return false;
};
