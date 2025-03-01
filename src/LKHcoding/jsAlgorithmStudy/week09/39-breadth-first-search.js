function answer(graph, start) {
  const map = {};

  graph.forEach(([start, next]) => {
    if (!map[start]) {
      map[start] = [];
    }

    map[start].push(next);
  });

  const queue = [start];
  const visited = new Set([start]);
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    map[node]?.forEach(child => {
      if (!visited.has(child)) {
        visited.add(child);
        queue.push(child);
      }
    });
  }

  return result;
}

console.log(
  answer(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
); // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  answer(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
); // 반환값 : [1, 2, 3, 4, 5, 0]
