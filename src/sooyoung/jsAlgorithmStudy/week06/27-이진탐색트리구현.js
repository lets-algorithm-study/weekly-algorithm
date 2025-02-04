// 첫 번째 인수 Ist 를 이용하여 이진 탐색 트리를 생성하고 , 두 번째 인수 searchList에 있는 각 노드
// 를 이진 탐색 트리에서 찾을 수 있는지 확인하여 true 또는 false를 담은 배열 result를 반환하는
// 함수 solution()을 작성하세요.
//   제약 조건
// • Ist 의 노드는 정수로 이루어져 있으며 1,000,000개를 초과하지 않습니다.
// • 이진 탐색 트리의 삽입과 탐색 기능을 구현해야 합니다.
// • searchList의 길이는 10 이하입니다.
//   입출력의 예
// Ist searchLista n s w e r
//   [5, 3,8,4, 2, 1, 7, 101 [1, 2,5,6] (true, true, true, false]
//   [1,3,5, 7,9 [2, 4,6,8, 101 [false, false, false, false, false]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.value) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.value !== key) {
      if (key < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

const solution = (list, searchList) => {
  const bst = new BST();
  for (const key of list) {
    bst.insert(key);
  }

  const result = [];

  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
};
