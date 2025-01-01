// 이진트리 - 전위 순회, 중위 순회, 후위 손회 리턴하는 함수 구현하기

class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // 왼쪽 자식 포인터
    this.right = null; // 오른쪽 자식 포인터
  }
}
function answer(nodes) {
  // 포인터를 이용한 이진 트리 생성
  let root = null;

  for (let i = 0; i < nodes.length; i++) {
    insertNode(nodes[i]);
  }

  function insertNode(value) {
    // 노드 삽입 함수 (레벨 순서로 삽입)
    const newNode = new Node(value);

    if (root === null) {
      root = newNode;
      return;
    }

    const queue = [root];

    while (queue.length > 0) {
      const current = queue.shift();

      // 레벨 순서대로 삽입하는거니 좌측 먼저
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        // 현재 노드에서 좌,우를 먼저 삽입하고, 그 다음 자식 노드에서 체크하기 위해 큐 사용
        queue.push(current.left);
      }

      // 좌측 체크 했으니 우측도 체크
      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        // 현재 노드에서 좌,우를 먼저 삽입하고, 그 다음 자식 노드에서 체크하기 위해 큐 사용
        queue.push(current.right);
      }
    }
  }

  // 전위 순회: root => left => right
  function preorder(node, result = []) {
    if (node) {
      result.push(node.value);
      preorder(node.left, result);
      preorder(node.right, result);
    }

    return result;
  }

  // 중위 순회: left => root => right
  function inorder(node, result = []) {
    if (node) {
      inorder(node.left, result);
      result.push(node.value);
      inorder(node.right, result);
    }

    return result;
  }

  // 후위 순회: left => right => root
  function postorder(node, result = []) {
    if (node) {
      postorder(node.left, result);
      postorder(node.right, result);
      result.push(node.value);
    }

    return result;
  }

  return [
    preorder(root).join(' '),
    inorder(root).join(' '),
    postorder(root).join(' '),
  ];
}

console.log(answer([1, 2, 3, 4, 5, 6, 7]));
