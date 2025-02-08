// MinHeap 클래스 정의
const { MinHeap } = require('./min_heap');

function solution(graph, start) {
  const distances = {}; // 시작 노드로부터의 거리를 저장
  for (const node in graph) {
    distances[node] = Infinity; // 모든 노드의 거리를 무한대로 초기화
  }
  distances[start] = 0; // 시작 노드의 거리는 0

  // [거리, 노드]
  const heap = new MinHeap();
  heap.insert([distances[start], start]); // 시작 노드를 힙에 삽입

  const paths = { [start]: [start] }; // 각 노드까지의 경로를 저장

  while (heap.size() > 0) {
    const [nearestDist, nearestNode] = heap.pop(); // 현재 가장 가까운 노드 추출
    if (distances[nearestNode] < nearestDist) continue; // 누적된 거리보다 더 작지 않으면 패스

    for (const adjNode in graph[nearestNode]) { // 모든 인접 노드들을 순회
      const curDist = nearestDist + graph[nearestNode][adjNode];

      if (curDist < distances[adjNode]) { // 더 짧은 거리를 발견한 경우 거리 업데이트
        distances[adjNode] = curDist;
        paths[adjNode] = [...paths[nearestNode], adjNode]; // 경로 업데이트

        heap.insert([curDist, adjNode]); // 힙에 새로운 거리와 노드 삽입
      }
    }
  }

  const sortedPaths = {};
  const pathsKeys = Object.keys(paths);
  pathsKeys.sort();
  for (const node of pathsKeys) {
    sortedPaths[node] = paths[node];
  }

  return [distances, sortedPaths];
}

// 테스트 케이스 1
const r1 = solution({
    'A': { 'B': 9, 'C': 3 },
    'B': { 'A': 5 },
    'C': { 'B': 1 }
  },
  'A'
);
console.log(r1);
// 예상 출력:
// [
//   { 'A': 0, 'B': 4, 'C': 3 },
//   {
//     'A': ['A'],
//     'B': ['A', 'C', 'B'],
//     'C': ['A', 'C']
//   }
// ]

// 테스트 케이스 2
const r2 = solution({
  'A': { 'B': 1 },
  'B': { 'C': 5 },
  'C': { 'D': 1 },
  'D': {}
}, 'A');
console.log(r2);
// 예상 출력:
// [
//   { 'A': 0, 'B': 1, 'C': 6, 'D': 7 },
//   {
//     'A': ['A'],
//     'B': ['A', 'B'],
//     'C': ['A', 'B', 'C'],
//     'D': ['A', 'B', 'C', 'D']
//    },
// ]
