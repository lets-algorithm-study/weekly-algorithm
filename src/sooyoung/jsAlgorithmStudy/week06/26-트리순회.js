// 이진 트리를 표현한 배열 nodes를 인자로 받습니다.
//   예를 들어서 nodes 가 [1, 2, 3, 4, 5, 6, 기이면 다음
// 과 같은 트리를 표현한 것입니다. 해당 이진 트리에 대
// 하여 전위 순회 , 중위 순회 , 후위 순회 결과를 반환하는
// solution() 함수를 구현하세요.
// 3
// 제약 조건
// • 입력 노드값의 개수는 1 개 이상 1,000개 이하이다.
// • 노드값은 정수형이며 , 중복되지 않는다.
//   입출력의 예 MTM5MzE0
// nodes
//   [1, 2, 3, 4, 5, 6, 7]
// return
// ["1245367,"4251637,4526731"]

const solution = nodes => {
  return [preOrder(nodes, 0), inOrder(nodes, 0), postOrder(nodes, 0)];
};

const preOrder = (nodes, index) => {
  if (index < nodes.length) {
    let ret = nodes[index];
    ret += preOrder(nodes, index * 2 + 1);
    ret += preOrder(nodes, index * 2 + 2);
    return ret;
  }

  return '';
};

const inOrder = (nodes, index) => {
  if (index < nodes.length) {
    let ret = inOrder(nodes, index * 2 + 1);
    ret += nodes[index];
    ret += inOrder(nodes, index * 2 + 2);
    return ret;
  }

  return '';
};

const postOrder = (nodes, index) => {
  if (index < nodes.length) {
    let ret = postOrder(nodes, index * 2 + 1);
    ret += postOrder(nodes, index * 2 + 2);
    ret += nodes[index];
    return ret;
  }

  return '';
};
