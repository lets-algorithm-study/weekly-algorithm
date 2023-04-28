// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 투포인터 써서 다시풀이
  if (head === null || head.next === null) return null;

  let slowCursor = head;
  let fastCursor = head;
  let isSame = false;

  while (fastCursor && fastCursor.next) {
    slowCursor = slowCursor.next;
    fastCursor = isSame === false ? fastCursor.next.next : fastCursor.next;

    if (isSame === false && slowCursor === fastCursor) {
      isSame = true;
      slowCursor = head;
    }
    if (isSame === true && slowCursor === fastCursor) {
      return slowCursor;
    }
  }
  return null;

  // 아래는 Map으로 풀었지만 O(N) 풀이방식임.
  // O(1)로 다시풀어보기
  // let nodeIdx = 0;
  // let map = new Map();
  // if (!head) {
  //   return null;
  // }
  //
  // map.set(head, 0);
  // head = head.next;
  // nodeIdx++;
  //
  // while (true) {
  //   if (!map.has(head)) {
  //     map.set(head, nodeIdx);
  //     nodeIdx++;
  //     if (head?.next) {
  //       head = head.next;
  //     } else {
  //       return null;
  //     }
  //   } else {
  //     return map.get(head);
  //   }
  // }
};

var cycleNode = {
  val: 0,
  next: { val: -4, next: cycleNode },
};

console.log(
  detectCycle({
    val: 3,
    next: { val: 2, next: cycleNode },
  })
);
