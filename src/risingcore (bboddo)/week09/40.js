// 다익스트라알고리즘
// O((N+E)logN)
// N: 노드의 개수
// E: 간선의 개수

// # 다익스트라 알고리즘

// 최단 경로를 구하는 알고리즘

// 가중치가 있는 그래프의 최단 경로를 구하는 문제는 대부분 다익스트라 알고리즘

// 1. 시작노드와 다음노드의 최소비용을 저장할 공간과 직전 노드를 저장할 공간 마련
// 2. 다음 노드들의 개수 N으로 이중 가중치가 적은 노드로 방문한다.
// 3. 직전 노드를 저장하고 최소비용을 저장한다.
// 4. 그 다음 방문하지 않는 노드들 중에서 가중치가 적은 노드를 찾는다.
// 5. 3번을 다시 활용한다.
// 6. 방향이 다르다면 이때 최소비용을 저장하지 않는다.
// 7. 모든 노드들을 방문 하였다면 다시 거슬러 올라가서 최소비용의 노드를 계산한다.

const input1 = {
  graph: {
    A: { B: 9, C: 3 },
    B: { A: 5 },
    C: { B: 1 },
  },
  start: 'A',
};
// return
// [
//   {'A':0,'B':4,'C':3},
//   {
//     'A':['A'],
//     'B':['A','C','B'],
//     'C':['A','C']
//   }
// ]

const input2 = {
  graph: {
    A: { B: 1 },
    B: { C: 5 },
    C: { D: 1 },
    D: {},
  },
  start: 'A',
};

// return
// [
//   {'A':0,'B':1,'C':6,'D':7},
//   {
//     'A':['A'],
//     'B':['A','B'],
//     'C':['A','B','C'],
//     'D':['A','B','C','D']
//   }
// ]

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const solution = (graph, start) => {
  // 다익스트라는 직전 노드를 저장하는 배열이 필요하다.
  // 거리 저장 객체 초기화
  const distances = {};
  // 직전 노드를 저장하는 배열 초기화
  const paths = {};
  const pq = new PriorityQueue();

  const visited = new Set();

  // 모든 노드의 거리를 무한대로 초기화
  // 왜? 거리를 무한대로 초기화하는 이유는 거리를 무한대로 초기화하면 최단 거리를 찾을 수 있기 때문이다.
  for (let node in graph) {
    distances[node] = Infinity;
    paths[node] = [];
  }
  // 시작 노드의 거리를 0으로 초기화
  distances[start] = 0;
  // 시작 노드의 직전 노드를 시작 노드로 초기화
  paths[start] = [start];

  // 시작 노드를 우선순위 큐에 추가
  pq.enqueue(start, 0);

  while (pq.values.length > 0) {
    const { node: currentNode } = pq.dequeue();

    // 이미 처리한 노드는 건너뛰기
    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    // 현재 노드의 이웃들만 확인
    const neighbors = graph[currentNode];
    for (let neighbor in neighbors) {
      const newDistance = distances[currentNode] + neighbors[neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        // 직접 연결된 경로만 사용
        paths[neighbor] = [...paths[currentNode], neighbor];
        pq.enqueue(neighbor, newDistance);
      }
    }
  }

  return [distances, paths];
};

console.log(solution(input1.graph, input1.start));
console.log(solution(input2.graph, input2.start));
