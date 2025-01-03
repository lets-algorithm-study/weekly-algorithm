// 1. 노드 클래스 정의
class Node {
  // 2. 노드 클래스 생성자
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 3. 이진 탐색 트리 클래스
class BST {
  constructor() {
    this.root = null;
  }

  // 4. 트리에 값 삽입
  insert(key) {
    const newNode = new Node(key);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (key > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        // 중복 값은 삽입하지 않음
        return;
      }
    }
  }

  // 5. 트리에서 값 탐색
  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.value) return true;
      current = key < current.value ? current.left : current.right;
    }
    return false;
  }
}

// 6. list에 있는 데이터를 활용해서 이진 탐색 트리 생성, searchList에 있는 원소 탐색
const solution = (list, searchList) => {
  const bst = new BST();

  // 배열의 각 요소를 이용하여 이진 탐색 트리 생성
  for (const key of list) {
    bst.insert(key);
  }

  // searchList의 각 값을 탐색하여 결과 배열 생성
  const result = searchList.map(searchKey => bst.search(searchKey));
  return result;
};

// 7. 예제 실행
const lst = [5, 3, 8, 4, 2, 1, 7, 10];
const lst2 = [1, 10, 11, 30, 40];
const searchList = [1, 2, 5, 6];
console.log(solution(lst, searchList)); // [true, true, true, false]
console.log(solution(lst2, searchList)); // [true, false, true, false]
