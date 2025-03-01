// https://school.programmers.co.kr/learn/courses/30/lessons/42892

class TreeNode {
  constructor(node) {
    this.x = node.x;
    this.value = node.value;
    this.left = null;
    this.right = null;
  }
}
function answer(nodeinfo) {
  // 노드 번호를 포함한 배열 생성
  const nodeList = nodeinfo.map((item, idx) => {
    const [x, y] = item;
    const value = idx + 1;

    return { x, y, value };
  });

  // y좌표 내림차순, x좌표 오름차순으로 정렬
  /**
   * y좌표 내림차순 (b.y - a.y)이 필요한 이유:
   *
   * 문제 조건에서 "자식 노드의 y값은 항상 부모 노드보다 작다"라고 했습니다
   * 따라서 y값이 큰 노드가 부모 노드가 되어야 합니다
   * 트리를 만들 때 위에서부터(루트부터) 아래로 구성해야 하므로, y값이 큰 순서대로 정렬해야 합니다
   * 예를 들어 y=6인 노드가 가장 위(루트)에 있어야 하고, 그 다음 y=5인 노드들이 와야 합니다
   *
   * x좌표 오름차순 (a.x - b.x)이 필요한 이유:
   *
   * 같은 y값을 가진 노드들 사이에서는 x좌표로 왼쪽/오른쪽을 판단해야 합니다
   * 따라서 같은 레벨(같은 y값)에서는 x값이 작은 순서대로 처리하는 것이 트리 구성에 용이합니다
   */
  nodeList.sort((a, b) => b.y - a.y || a.x - b.x);

  // 트리에 노드 삽입
  function insertNode(currentNode, targetNode) {
    if (!currentNode) {
      return new TreeNode(targetNode);
    }

    if (currentNode.x > targetNode.x) {
      currentNode.left = insertNode(currentNode.left, targetNode);
    } else {
      currentNode.right = insertNode(currentNode.right, targetNode);
    }

    return currentNode;
  }

  // 트리 생성
  let root = null;
  for (const node of nodeList) {
    root = insertNode(root, node);
  }

  // 전위 순회 (root -> left -> right)
  function preorder(node, result = []) {
    if (node) {
      result.push(node.value);
      preorder(node.left, result);
      preorder(node.right, result);
    }
    return result;
  }

  // 후위 순회 (left -> right -> root)
  function postorder(node, result = []) {
    if (node) {
      postorder(node.left, result);
      postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  return [preorder(root), postorder(root)];
}

console.log(
  answer([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
