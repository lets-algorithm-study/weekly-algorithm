class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  // [거리, 노드] 쌍을 힙에 추가
  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }

  // 최소값(루트) 추출
  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this._bubbleDown();
    }

    return min;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  // 새 원소를 아래서 위로 올리며 정렬
  _bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][0] <= this.heap[index][0]) break;

      this._swap(index, parent);
      index = parent;
    }
  }

  // 루트를 위에서 아래로 내리며 정렬
  _bubbleDown() {
    let index = 0;

    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < this.size() && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < this.size() && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) break;

      this._swap(index, smallest);
      index = smallest;
    }
  }
}

function findShortestPaths(graph, start) {
  /** 그래프: A -> B(가중치:1) -> C(가중치:5) -> D(가중치:1)
   * distances = {
   *   'A': 0,    // A까지 거리: 0
   *   'B': 1,    // B까지 거리: 1
   *   'C': 6,    // C까지 거리: 1 + 5 = 6
   *   'D': 7     // D까지 거리: 1 + 5 + 1 = 7
   * }
   */
  const distances = Object.fromEntries(
    Object.keys(graph).map(node => [node, Infinity])
  );
  distances[start] = 0;

  /** 그래프: A -> B -> C -> D
   * paths = {
   *   'A': ['A'],           // A까지 가는 경로: A
   *   'B': ['A', 'B'],      // B까지 가는 경로: A -> B
   *   'C': ['A', 'B', 'C'], // C까지 가는 경로: A -> B -> C
   *   'D': ['A', 'B', 'C', 'D']  // D까지 가는 경로: A -> B -> C -> D
   * }
   */
  const paths = { [start]: [start] };

  const queue = new MinHeap();
  queue.push([0, start]);

  // 다익스트라 알고리즘 실행
  while (queue.size() > 0) {
    // 1. 최단거리 노드 선택
    const [currentDist, currentNode] = queue.pop();
    // currentDist: 현재까지의 최단거리
    // currentNode: 현재 처리할 노드

    // 2. 이미 더 짧은 경로를 찾은 경우 스킵
    if (distances[currentNode] < currentDist) continue;

    // 3. 현재 노드의 모든 인접 노드 검사
    for (const [next, weight] of Object.entries(graph[currentNode])) {
      // entries 를 돌렸으니, key => next, value => weight

      // 새로운 경로의 거리 계산
      const newDist = currentDist + weight;

      // 4. 더 짧은 경로 발견시
      if (newDist < distances[next]) {
        // 최단거리 갱신
        distances[next] = newDist;

        // 경로 갱신
        paths[next] = [...paths[currentNode], next];

        // 다음 탐색을 위해 큐에 추가
        queue.push([newDist, next]);
      }
    }
  }

  // 결과 정렬 및 반환
  return [
    distances,
    Object.fromEntries(
      Object.keys(paths)
        .sort()
        .map(node => [node, paths[node]])
    ),
  ];
}

console.log(findShortestPaths({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, 'A'));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(
  findShortestPaths({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, 'A')
);
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]
