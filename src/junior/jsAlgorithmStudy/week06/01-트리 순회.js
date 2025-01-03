// 해당 이진 트리에 대하여 전위 순회, 중위 순회, 후위 순회 결과값을 구해라.

const solution = nodes => {
  // 2. 전위 순회 함수 정의 (Preorder)
  //    현재 노드 방문 후 왼쪽 자식 방문, 그 후 오른쪽 자식 방문
  const preorder = index => {
    if (index >= nodes.length) {
      return []; // 범위를 벗어나면 빈 배열 반환
    }
    return [nodes[index], ...preorder(2 * index + 1), ...preorder(2 * index + 2)];
  };

  // 3. 중위 순회 함수 정의 (Inorder)
  //    왼쪽 자식 방문 후 현재 노드 방문, 그 후 오른쪽 자식 방문
  const inorder = index => {
    if (index >= nodes.length) {
      return []; // 범위를 벗어나면 빈 배열 반환
    }
    return [...inorder(2 * index + 1), nodes[index], ...inorder(2 * index + 2)];
  };

  // 4. 후위 순회 함수 정의 (Postorder)
  //    왼쪽 자식 방문 후 오른쪽 자식 방문, 그 후 현재 노드 방문
  const postorder = index => {
    if (index >= nodes.length) {
      return []; // 범위를 벗어나면 빈 배열 반환
    }
    return [...postorder(2 * index + 1), ...postorder(2 * index + 2), nodes[index]];
  };

  // 5. 각 순회 결과값을 문자열로 변환

  const preResult = preorder(0).join(' ');
  const inResult = inorder(0).join(' ');
  const postResult = postorder(0).join(' ');

  return [preResult, inResult, postResult];
};

const nodes = [1, 2, 3, 4, 5, 6, 7];
console.log(solution(nodes));
// [ '1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1' ]
