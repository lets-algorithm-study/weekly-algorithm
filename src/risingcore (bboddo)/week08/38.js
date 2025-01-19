// PDF Page 428

// 38. 깊이 우선 탐색 순회 O(N+E)

// ['A','B','C','D','E']
const input1 = {
  graph: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
  start: 'A',
};

// {
//   'A': ['B'],
//   'B': ['C'],
//   'C': ['D'],
//   'D': ['E'],

// }

// ['A','B','D','E','F','C']
const input2 = {
  graph: [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['E', 'F'],
  ],
  start: 'A',
};

// {
//   'A': ['B', 'C'],    // A는 B와 C로 갈 수 있다
//   'B': ['D', 'E'],    // B는 D와 E로 갈 수 있다
//   'C': ['F'],         // C는 F로 갈 수 있다
//   'E': ['F'],         // E는 F로 갈 수 있다
// }

// ['A','B','C','D','E','F','G']
const input3 = {
  graph: [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['C', 'G'],
  ],
  start: 'A',
};

// {
//   'A': ['B', 'C'],    // A는 B와 C로 갈 수 있다
//   'B': ['D', 'E'],    // B는 D와 E로 갈 수 있다
//   'C': ['F', 'G'],    // C는 F와 G로 갈 수 있다
// }

// ['A','B','C','D','E','F','G','H']
const input4 = {
  graph: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
    ['G', 'H'],
    ['D', 'H'],
  ],
  start: 'A',
};

// {
//   'A': ['B'],         // A는 B로 갈 수 있다
//   'B': ['C'],         // B는 C로 갈 수 있다
//   'C': ['D'],         // C는 D로 갈 수 있다
//   'D': ['E', 'H'],    // D는 E와 H로 갈 수 있다
//   'E': ['F'],         // E는 F로 갈 수 있다
//   'F': ['G'],         // F는 G로 갈 수 있다
//   'G': ['H'],         // G는 H로 갈 수 있다
// }

// 깊이 우선 탐색
// 모든 그래프의 노드를 순회하는 함수

// O(N+E)
// N: 노드의 개수
// E: 간선의 개수

const soulution = (graph, start) => {
  // 그래프의 값을 통해 각 노드가 어느곳을 방문할 수 있는지 확인 검증
  // 문자열이라고 제약이 있으므로 객체로 선언
  const edges = {};
  graph.forEach(([from, to]) => {
    if (!edges[from]) edges[from] = [];
    edges[from].push(to);
  });

  // 방문 했는지 판단
  // Set을 사용해주는 이유로는 탐색 속도를 개선 할 수 있음.
  const visited = new Set();
  // 스택 초기화
  const stack = [start];

  while (stack.length !== 0) {
    // 스택에서 마지막 노드를 꺼내옴
    const node = stack.pop();
    // 방문 했는지 판단
    if (!visited.has(node)) {
      visited.add(node);
      // 인접 노드들을 역순으로 스택에 추가 마지막에 들어간 노드가 먼저 방문되도록 LIFO
      if (edges[node]) {
        const neighbors = [...edges[node]];
        for (let i = neighbors.length - 1; i >= 0; i--) {
          stack.push(neighbors[i]);
        }
      }
    }
  }
  return visited;
};

console.log(soulution(input1.graph, input1.start)); // ['A','B','C','D','E']
console.log(soulution(input2.graph, input2.start)); // ['A','B','D','E','F','C']
console.log(soulution(input3.graph, input3.start)); // ['A','B','D','E','C','F','G']
console.log(soulution(input4.graph, input4.start)); // ['A','B','C','D','E','F','G','H']
