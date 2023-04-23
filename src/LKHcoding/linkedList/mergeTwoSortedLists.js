// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1227/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newList = null;
  if (list1?.val >= list2?.val) {
    newList = list2;
    list2 = list2?.next;
  } else {
    newList = list1;
    list1 = list1?.next;
  }
  let head = newList;

  while (list1 || list2) {
    if (list1?.val > list2?.val) {
      newList.next = list2;
      list2 = list2?.next;
      newList = newList.next;
    } else {
      newList.next = list1;
      list1 = list1?.next;
      newList = newList.next;
    }
  }
  console.log('=> mergeTwoSortedLists.js:39 ~ head', head);
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node4 = new ListNode(4, null);
let node2 = new ListNode(2, node4);
let node1 = new ListNode(1, node2);

let nodeTwo4 = new ListNode(4, null);
let nodeTwo2 = new ListNode(3, nodeTwo4);
let nodeTwo1 = new ListNode(1, nodeTwo2);

mergeTwoLists(node1, nodeTwo1);
