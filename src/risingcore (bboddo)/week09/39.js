// 문제39 너비우선탐색순회*

// 너비 우선 탐색
// 모든 그래프의 노드를 순회하는 함수

// O(N+E)
// N: 노드의 개수
// E: 간선의 개수

const input1 = {
  graph: [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [3, 7],
    [4, 8],
    [5, 8],
    [6, 9],
    [7, 9],
  ],
  start: 1,
};
// return [1, 2, 3, 4, 5, 6, 7, 8, 9]

// {
//   '1': [2, 3],
//   '2': [4, 5],
//   '3': [6, 7],
//   '4': [8],
//   '5': [8],
//   '6': [9],
//   '7': [9],
// }

const input2 = {
  graph: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
  ],
  start: 1,
};

// {
//   '0': [1],
//   '1': [2],
//   '2': [3],
//   '3': [4],
//   '4': [5],
//   '5': [0]
// }

// return [1, 2, 3, 4, 5, 0]

const solution = (graph, start) => {
  // 그래프를 단방향 인접 리스트로 변환
  const edges = {};
  graph.forEach(([from, to]) => {
    if (!edges[from]) edges[from] = [];
    edges[from].push(to);
  });

  // 탐색 속도 개선을 위한 Set 사용
  // 방문한 노드를 저장하는 Set
  const visited = new Set();
  // 방문한 노드를 저장하는 배열
  const result = [];
  // 탐색을 위한 큐
  const queue = [start];

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // 큐에서 노드를 꺼내기
    const node = queue.shift();
    // 방문한 노드가 아니라면 방문 처리
    if (!visited.has(node)) {
      // 방문한 노드를 저장하기
      visited.add(node);
      // 방문한 노드를 결과 배열에 추가
      result.push(node);
      // 인접한 노드가 있다면 큐에 추가
      if (edges[node]) {
        const neighbors = edges[node].filter(n => !visited.has(n));
        queue.push(...neighbors);
      }
    }
  }

  return result;
};

// 스택에서 lifo 를 사용해서 마지막 노드를 꺼내오는 방식으로 사용햇습니다.

console.log(solution(input1.graph, input1.start));
console.log(solution(input2.graph, input2.start));
