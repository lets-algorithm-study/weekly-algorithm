var MyLinkedList = function () {
  this.head = null;
};

MyLinkedList.prototype.getNode = function (idx) {
  // 1, 2, 3
  //  idx = 2;
  let node = this.head;
  for (let i = 0; i < idx; i++) {
    if (!node.next) {
      return null;
    }
    node = node.next;
  }

  return node;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  return node?.val ?? -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  //     3, 5
  let tmpHead = this.head;
  if (tmpHead === null) {
    this.head = { val, next: null };
  } else {
    this.head = {
      val,
      next: tmpHead,
    };
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = this.head;
  if (node === null) {
    this.head = { val, next: null };
    return;
  }
  while (node.next !== null) {
    node = node.next;
  }
  node.next = { val, next: null };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.head === null) {
    if (index > 0) {
      return;
    }
    this.head = { val, next: null };
    return;
  }
  if (index === 0) {
    let node = this.getNode(index);
    this.head = { val, next: node };
    return;
  }

  let node = this.getNode(index); // 1

  if (node === null) {
    let beforeNodeByIndex = this.getNode(index - 1); // 1
    if (beforeNodeByIndex === null) {
      return;
    }
    beforeNodeByIndex.next = { val, next: null };
    return;
  }

  // 중간삽입시 문제가 있을듯

  // index가 0이 아니고, 뒤에서 1칸앞도 아님. 중간.

  node.next = { val: node.val, next: node.next };

  node.val = val;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.head === null) {
    return;
  }

  let beforeNode = this.getNode(index - 1); //0
  let node = this.getNode(index); // 1
  let nextNode = this.getNode(index + 1); //2

  if (index === 0) {
    if (nextNode === null) {
      this.head = null;
      return;
    }
    node.val = nextNode.val;
    node.next = nextNode.next;
  } else {
    if (nextNode === null) {
      if (node !== null) {
        beforeNode.next = null;
      }
      return;
    }

    beforeNode.next = nextNode;
  }
};

const methods = ['MyLinkedList', 'addAtHead', 'addAtIndex', 'get'];
const params = [[], [5], [1, 0], [0]];

const tmp = new MyLinkedList();

methods.map((item, idx) => {
  if (idx === 0) return;

  tmp[item](...params[idx]);

  console.log(`\r\n${item} => `, [...params[idx]]);
  console.log(`\r${JSON.stringify(tmp)}`);
});

// console.log(tmp.get(1));

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
