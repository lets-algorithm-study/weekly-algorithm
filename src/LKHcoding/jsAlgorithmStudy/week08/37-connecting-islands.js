// https://school.programmers.co.kr/learn/courses/30/lessons/42861

function solution(n, costs) {
  /**
   * Union-Find 알고리즘을 위한 두 가지 핵심 함수를 구현합니다.
   * 1. find(): 노드의 최상위 부모를 찾는 함수
   * 2. union(): 두 노드를 연결하는 함수
   */

  // 각 섬이 속한 집합의 부모를 저장하는 배열
  // 초기에는 각 섬이 자신을 부모로 가집니다.
  const parent = Array.from({ length: n }, (_, index) => index);

  // 특정 섬의 최상위 부모를 찾는 함수
  function find(node) {
    // 자기 자신이 부모라면 그대로 반환
    if (parent[node] === node) {
      return node;
    }

    // 경로 압축: 재귀적으로 최상위 부모를 찾아 바로 연결
    // 다음 탐색 시 더 빠른 접근을 위해 부모 정보를 업데이트
    parent[node] = find(parent[node]);
    return parent[node];
  }

  // 두 섬을 연결하는 함수
  function union(island1, island2) {
    const parent1 = find(island1);
    const parent2 = find(island2);

    // 이미 같은 집합에 속해있다면 연결할 필요 없음
    if (parent1 === parent2) {
      return false;
    }

    // 두 집합을 연결
    parent[parent2] = parent1;
    return true;
  }

  // 다리 건설 비용을 기준으로 오름차순 정렬
  // 어떤 노드를 연결 하든 비용 적은것부터 연결 시켜 나가기 위함
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);

  let totalCost = 0; // 총 건설 비용
  let connectedBridges = 0; // 연결된 다리의 수

  // Kruskal 알고리즘 수행
  // 가장 적은 비용의 다리부터 차례대로 연결을 시도
  for (const [island1, island2, cost] of sortedCosts) {
    // 두 섬을 연결할 수 있는 경우
    if (union(island1, island2)) {
      totalCost += cost;
      connectedBridges++;

      // 모든 섬이 연결되었는지 확인
      // n개의 섬을 연결하는데 필요한 다리의 수는 n-1개
      if (connectedBridges === n - 1) {
        break;
      }
    }
  }

  return totalCost;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
