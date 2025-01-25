function solution(graph, start) {
  const q = [start];
  const visited = new Set();
  visited.add(start); // 첫 원소는 방문하고 시작

  const res = [];
  const adjList = {};
  // 인접 리스트로 변환
  for (const [from, to] of graph) {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to);
  }

  while (q.length > 0) {
    const cur = q.shift();
    res.push(cur);

    // 인접 노드가 없으면 탈출
    if (!adjList[cur]) continue;

    // 모든 인접노드들을 전부 추가 하고 다음으로 넘어감
    for (const adj of adjList[cur]) {
      if (!visited.has(adj)) {
        visited.add(adj);
        q.push(adj);
      }
    }
  }

  return res;
}

const r1 = solution(
    [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]],
    1
  )
;
console.log(r1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const r2 = solution(
    [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
    1
  )
;
console.log(r2); // [1, 2, 3, 4, 5, 0]