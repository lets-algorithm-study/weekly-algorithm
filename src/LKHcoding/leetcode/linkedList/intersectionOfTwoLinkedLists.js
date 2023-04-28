// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?
  let setA = new Set();
  let tmpA = headA;
  while (tmpA) {
    setA.add(tmpA);
    tmpA = tmpA.next;
  }

  let tmpB = headB;

  while (tmpB) {
    if (setA.has(tmpB)) {
      return tmpB;
    }
    tmpB = tmpB.next;
  }

  return null;

  // 아래는 O(1)로 풀이한 방식

  // let currA = headA;
  // let currB = headB;
  //
  // while(currA != currB) {
  //   if(!currA) {
  //     currA = headB;
  //   } else {
  //     currA = currA.next;
  //   }
  //
  //   if(!currB) {
  //     currB = headA;
  //   } else {
  //     currB = currB.next;
  //   }
  // }
  //
  // return currA;
};
