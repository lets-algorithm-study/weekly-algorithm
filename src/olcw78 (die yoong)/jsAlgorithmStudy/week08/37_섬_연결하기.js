function solution(n, costs) {
  // 비용 기준으로 간선을 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 각 노드의 부모를 추적하는 parent 배열 생성
  const parent = Array.from({ length: n }, (_, i) => i);

  // 각 노드의 트리의 랭크를 추적하는 rank 배열 생성
  const rank = Array(n).fill(0);

  let minCost = 0; // LST 총 비용
  let edges = 0; // LST 에 포함된 간선의 개수

  for (const edge of costs) {
    if (edge === n - 1) {
      // n-1 개의 간선이 포함된 경우 중단(최소 신장 트리의 속성)
      break;
    }

    // 현재 간선의 두 노드가 속한 집합의 루트 찾기
    const x = find(parent, edge[0]);
    const y = find(parent, edge[1]);

    if (x !== y) {
      union(parent, rank, x, y);
      minCost += edge[2];
      edges += 1;
    }
  }

  return minCost;
}

function union(disjointSet, rank, x, y) {
  const rootX = find(disjointSet, x);
  const rootY = find(disjointSet, y);

  if (rank[rootX] < rank[rootY]) {
    disjointSet[rootX] = rootY;
  } else if (rank[rootX] > rank[rootY]) {
    disjointSet[rootY] = rootX;
  } else {
    disjointSet[rootY] = rootX;
    rank[rootX] += 1;
  }
}

function find(disjointSet, x) {
  if (disjointSet[x] === x) {
    return x;
  }
  disjointSet[x] = find(disjointSet, disjointSet[x]);
  return disjointSet[x];
}

