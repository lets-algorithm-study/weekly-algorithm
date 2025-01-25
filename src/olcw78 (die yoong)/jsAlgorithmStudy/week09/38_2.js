/**
 *
 * @param {string[][]} graph
 * @param {string} start
 * @returns
 */
function solution(graph, start) {
  const visited = new Set();
  const adjList = {};
  // 인접 리스트 먼저 만들기
  for (const [from, to] of graph) {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to);
  }

  const stack = [start];
  const res = [];
  // 스택이 비었으면 모든 노드들을 방문 한걸로 종료.
  while (stack.length > 0) {
    const cur = stack.pop();
    // 방문한 적 없으면
    if (!visited.has(cur)) {
      // 방문 처리
      visited.add(cur);
      res.push(cur);
    }

    // 인접 노드가 없으면 걍 탈출
    if (!adjList[cur]) continue;
    // 역순으로 방문
    for (let i = adjList[cur].length - 1; i >= 0; i--) {
      const adj = adjList[cur][i];
      // 방문한적 없을 때 스택에 넣고 다시 pop하기
      if (!visited.has(adj)) {
        stack.push(adj);
      }
    }
  }

  return res;
}

const r1 = solution(
  [['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']],
  'A'
);
console.log(r1); // ['A', 'B', 'C', 'D', 'E']

const r2 = solution(
  [['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']],
  'A'
);
console.log(r2); //  ['A', 'B', 'D', 'E', 'F', 'C']
