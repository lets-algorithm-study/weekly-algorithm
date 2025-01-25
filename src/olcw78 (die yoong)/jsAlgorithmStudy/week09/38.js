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

  function dfs(node, visited, res) {
    // 1. 방문 처리
    visited.add(node);
    // 2. 결과 추가
    result.push(node);
    // 3. 연결된 노드가 없으면 탈출
    if (!adjList[node]) return;

    // 4. 연결된 노드가 있음 -> 연결된 노드들을 순회하여 더 깊이 방문
    for (const adj of adjList[node]) {
      // 이미 방문 되었으면 안됨.
      if (!visited.has(adj)) {
        // 더 깊이 방문
        dfs(adj, visited, res);
      }
    }
  }

  const result = [];
  dfs(start, visited, result);
  return result;
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
