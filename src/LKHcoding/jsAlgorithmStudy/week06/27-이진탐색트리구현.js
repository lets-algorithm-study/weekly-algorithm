/**
 * 첫 번째 인수 lst 를 이용하여 이진 탐색 트리를 생성하고,
 * 두 번째 인수 searchList 에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여
 * true 또는 false 를 담은 배열 result 를 반환하는
 * 함수 solution() 을 작성 하세요.
 *
 * 제약조건
 * lst 의 노드는 정수로 이루어져 있으며 1000000개를 초과하지 않습니다.
 * 이진 탐색 트리의 삽입과 탐색 기능을 구현해야 합니다.
 * searchList의 길이는 10 이하입니다.
 */

// 이진 탐색 트리의 노드 클래스 정의
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 이진 탐색 트리 클래스 정의
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입 메소드
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      // 값이 작으면 왼쪽으로
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      }
      // 값이 크면 오른쪽으로
      else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // 노드 검색 메소드
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

function solution(lst, searchList) {
  // 이진 탐색 트리 생성
  const bst = new BinarySearchTree();

  // lst 의 모든 값을 트리에 삽입
  for (const node of lst) {
    bst.insert(node);
  }

  // searchList 각 값에 대해 검색 수행
  return searchList.map(item => bst.search(item));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
