class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild] ?
          rightChild : leftChild;

      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;


  const heap = new MinHeap();
  heap.insert([distances[start], start]);

  const paths = { [start]: start };

  while (heap.size() > 0) {
    const [curDist, curNode] = heap.pop();
    if (distances[curNode] < curDist) continue;

    for (const adjNode in graph[curNode]) {
      const weight = graph[curNode][adjNode];
      const dist = curDist + weight;

      if (dist < distances[adjNode]) {
        distances[adjNode] = dist;
        paths[adjNode] = [...paths[curNode], adjNode];

        heap.insert([dist, adjNode]);
      }
    }
  }

  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach(node => {
      sortedPaths[node] = paths[node];
    });

  return [distances, sortedPaths];

  // A
  // const visited = new Set();
  // const graphEntries = Object.entries(graph);
  // const store = graphEntries.map(kvp => {
  //   const isStart = kvp[0] === start;
  //   return ({
  //     node: isStart ? start : kvp[0],
  //     cost: isStart ? 0 : Number.MAX_SAFE_INTEGER,
  //     prev: isStart ? start : null
  //   });
  // });
  // const res = [];
  //
  // const q = [store.find(s => s.node === start)];
  // while (q.length > 0) {
  //   const cur = q.shift();
  //   res.push(cur.node);
  //
  //   const targetIndex = graphEntries.findIndex(
  //     ([node, conn]) => node === cur.node);
  //   const targetConnections = Object.entries(graphEntries[targetIndex][1]);
  //
  //   for (const { node, cost, prev } of store) {
  //     if (node === cur.node) continue;
  //
  //     let i = 0;
  //     for (const [node2, cost2] of targetConnections) {
  //       i++;
  //       if (!visited.has(node2)) {
  //         visited.add(node2);
  //         q.push(node2);
  //         if (cost > cost2) store[i].cost = cost2;
  //         store[i].prev = cur.node;
  //       }
  //     }
  //   }
  // }
  return res;
}

const r1 = solution({
    'A': { 'B': 9, 'C': 3 },
    'B': { 'A': 5 },
    'C': { 'B': 1 }
  },
  'A'
);
console.log(r1);
// [
//   { 'A': 0, 'B': 4, 'C': 3 },
//   {
//     'A': ['A'],
//     'B': ['A', 'C', 'B'],
//     'C': ['A', 'C']
//   }
// ]

const r2 = solution({
  'A': { 'B': 1 },
  'B': { 'C': 5 },
  'C': { 'D': 1 },
  'D': {}
}, 'A');
console.log(r2);
// [
//   { 'A': 0, 'B': 1, 'C': 6, 'D': 7 },
//   {
//     'A': ['A'],
//     'B': ['A', 'B'],
//     'C': ['A', 'B', 'C'],
//     'D': ['A', 'B', 'C', 'D']
//    },
//  ]