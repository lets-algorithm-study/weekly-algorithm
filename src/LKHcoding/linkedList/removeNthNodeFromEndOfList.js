// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 이문제는 나중에 지우고 다시 풀어볼것 ( 발상 가능 체크 )
  // 커서 3개를 동시에 움직일 예정.
  let fast = head,
    slow = head,
    prev = head;

  // 가장 빨리갈 커서를 미리 n만큼 이동시킨다.
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // fast, prev, slow를 동시에 1칸씩 이동시키면서 끝까지 간다.
  // ( 뒤에서 n칸 앞에껄 짤라야 하기 때문 )
  while (fast !== null) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }

  // slow와 head가 같다면 노드가 1개밖에 없는거임.
  if (slow === head) {
    return slow.next;
  }

  // prev의 next를 slow의 next로 바꿔서 노드 잘라내기
  prev.next = slow.next;
  return head;
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

removeNthFromEnd(node1, 2);
