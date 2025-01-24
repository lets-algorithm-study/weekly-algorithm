function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};

  graph.forEach(([start, next]) => {
    if (!adjList[start]) {
      adjList[start] = [];
    }

    adjList[start].push(next);
  });

  // dfs 탐색 함수
  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    const arr = adjList[node] || [];

    arr.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  const visited = new Set();
  const result = [];
  dfs(start, visited, result);

  return result;
}

console.log(
  solution(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
      ['d', 'e'],
    ],
    'a'
  )
);

function answer(graph, start) {
  const adjList = {};

  graph.forEach(([start, next]) => {
    if (!Array.isArray(adjList[start])) {
      adjList[start] = [];
    }

    adjList[start].push(next);
  });

  const result = [];
  const visited = new Set();
  const stack = [start];

  while (true) {
    const curNode = stack.pop();
    visited.add(curNode);
    result.push(curNode);

    if (!Array.isArray(adjList[curNode])) {
      break;
    }

    adjList[curNode].forEach(child => {
      if (!visited.has(child)) {
        stack.push(child);
      }
    });
  }

  return result;
}

console.log(
  answer(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
      ['d', 'e'],
    ],
    'a'
  )
);
