// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1209/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = (head) => {
  const findMidPoint = (head) => {
    let slowCursor = head;
    let fastCursor = head;
    while (fastCursor && fastCursor?.next) {
      slowCursor = slowCursor?.next;

      fastCursor = fastCursor?.next?.next;
    }
    return slowCursor;
  };
  const reverse = (head) => {
    let startNode = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = startNode;
      startNode = current;
      current = next;
    }
    return startNode;
  };
  const compare = (list1, list2) => {
    while (list1 && list2) {
      if (list1.val !== list2.val) {
        return false;
      }
      list1 = list1?.next;
      list2 = list2?.next;
    }
    return true;
  };
  /*
   * slowCursor는 value를 리버스 시키면서 간다.
   * fastCursor가 끝까지 가면 가운데노드를 찾을수 있다.
   * 그때부터 slowCursor와 head부터 다시 반복문 시작하고
   * 비교해서 다른게 있으면 false
   */

  const midPoint = findMidPoint(head);
  const tail = reverse(midPoint);
  return compare(head, tail);
};
