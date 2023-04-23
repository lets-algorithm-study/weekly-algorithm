// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1205/

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
var reverseList = function (head) {
  if (head === null) return head;

  // 리턴할 reverseList의 마지막 next는 null이므로 초기값은 null 할당
  let firstNode = null;

  while (head) {
    // ListNode를 앞에서부터 돌면서 reverseList의 뒤부터 만들어나가는 개념.
    // head를 커서로 사용한다.

    // head.next를 복사해둔다.
    let tmpNext = head.next;

    // head.next엔 firstNode를 할당하고,
    // firstNode에는 head를 할당해서 스왑 하기
    head.next = firstNode;
    firstNode = head;

    // head에 head.next를 넣어서 커서를 다음으로 이동.
    head = tmpNext;
  }

  return firstNode;
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

reverseList(node1);
