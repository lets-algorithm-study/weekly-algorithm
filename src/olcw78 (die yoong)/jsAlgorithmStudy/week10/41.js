function solution(graph, source) {
  const numVertices = graph.length;
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  const predecessor = Array(numVertices).fill(null);

  for (let i = 0; i < numVertices - 1; i++) {
    for (let j = 0; j < numVertices; j++) { // 모든 노드들 * 순환 포함 모든 노드들 순회
      const curDist = distance[j];
      for (const [node, weight] of graph[j]) {
        // 최단 거리 찾기
        if (curDist + weight < distance[node]) {
          // 찾았으면 거리 갱신
          distance[node] = curDist + weight;
          // 직전 노드로 저장
          predecessor[node] = j;
        }
      }
    }
  }

  for (let i = 0; i < numVertices; i++) {
    const curDist = distance[i];
    for (const [v, weight] of graph[i]) { // 다시 모드 노드 수행 하여 음의 가중치가 있는지 확인
      if (curDist + weight < distance[v]) {
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

const r1 = solution(
  [[[1, 4], [2, 3], [4, -6]], [[3, 5]], [[1, 2]], [[0, 7], [2, 4]], [[2, 2]]],
  0);
console.log(r1);

const r2 = solution(
  [[[1, 5], [2, -1]], [[2, 2]], [[3, -2]], [[0, 2], [1, 6]]],
  0);
console.log(r2);
