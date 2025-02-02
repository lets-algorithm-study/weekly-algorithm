function solution(graph, source) {
  const V = graph.length; // 노드의 개수

  // 거리와 predecessor 배열 초기화
  const distance = new Array(V).fill(Infinity);
  const predecessor = new Array(V).fill(null);

  // 시작 노드의 거리는 0
  distance[source] = 0;

  // V-1번 반복하여 모든 간선을 체크
  for (let i = 0; i < V - 1; i++) {
    for (let u = 0; u < V; u++) {
      // 현재 노드 u에서 연결된 모든 간선에 대해
      for (const [v, weight] of graph[u]) {
        // 완화(relaxation) 과정
        if (distance[u] !== Infinity && distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight;
          predecessor[v] = u;
        }
      }
    }
  }

  // 음의 가중치 순회 검사
  // 한 번 더 반복하여 값이 갱신되면 음의 순회가 존재
  for (let u = 0; u < V; u++) {
    for (const [v, weight] of graph[u]) {
      if (distance[u] !== Infinity && distance[u] + weight < distance[v]) {
        // 음의 가중치 순회 발견
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

const graph1 = [
  [
    [1, 4],
    [2, 3],
    [4, -6],
  ],
  [[3, 5]],
  [[1, 2]],
  [
    [0, 7],
    [2, 4],
  ],
  [[2, 2]],
];

console.log('테스트 케이스 1:', solution(graph1, 0));
const graph2 = [
  [
    [1, 5],
    [2, -1],
  ],
  [[2, 2]],
  [[3, -2]],
  [
    [0, 2],
    [1, 6],
  ],
];

console.log('테스트 케이스 2:', solution(graph2, 0));
