input1 = {
  graph: [
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
  ],
  source: 0,
};

// return [[0, 2,- 4,- ,3 ,-6 ], [null, ,2,4,1,0 ]]

input2 = {
  graph: [
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
  ],
  source: 0,
};

// return [-1]
// 시간복잡도는 O(VE) (V: 정점 수, E: 간선 수)
// 음의 사이클 감지 가능
function solution(graph, source) {
  // 그래프의 전체 정점 수
  const numVertices = graph.length;

  // 각 정점까지의 최단 거리를 저장하는 배열
  // 초기에는 모든 정점까지의 거리를 무한대로 설정
  const distance = [...Array(numVertices)].map(() => Infinity);
  // 시작 정점의 거리는 0으로 설정
  distance[source] = 0;

  // 최단 경로를 추적하기 위한 배열
  // predecessor[v]는 정점 v로 가는 최단 경로에서 v 직전의 정점을 저장
  const predecessor = [...Array(numVertices)].map(() => null);

  // 벨만-포드의 주요 로직
  // (정점 수 - 1)번 반복하여 모든 간선을 확인
  // 정점 수 - 1번이면 충분한 이유: 최단 경로는 최대 (정점 수 - 1)개의 간선을 가질 수 있기 때문
  for (let temp = 0; temp < numVertices - 1; temp++) {
    // 모든 정점에 대해
    for (let u = 0; u < numVertices; u++) {
      // 현재 정점 u에서 나가는 모든 간선 (v: 도착점, weight: 가중치)
      for (const [v, weight] of graph[u]) {
        // 완화(Relaxation) 과정
        // 현재 알고 있는 v까지의 거리보다 u를 거쳐 v로 가는 경로가 더 짧다면
        if (distance[u] + weight < distance[v]) {
          // v까지의 거리 업데이트
          distance[v] = distance[u] + weight;
          // v로 가는 경로에서 직전 정점을 u로 업데이트
          predecessor[v] = u;
        }
      }
    }
  }

  // 음의 사이클 검사
  // 모든 간선을 한 번 더 확인하여 더 짧은 경로가 있는지 검사
  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      // 여전히 더 짧은 경로가 발견된다면 음의 사이클이 존재
      if (distance[u] + weight < distance[v]) {
        // 음의 사이클이 있으면 최단 경로가 정의되지 않으므로 [-1] 반환
        return [-1];
      }
    }
  }

  // 최단 거리 배열과 경로 추적을 위한 predecessor 배열 반환
  return [distance, predecessor];
}

console.log(solution(input1.graph, input1.source));
console.log(solution(input2.graph, input2.source));
