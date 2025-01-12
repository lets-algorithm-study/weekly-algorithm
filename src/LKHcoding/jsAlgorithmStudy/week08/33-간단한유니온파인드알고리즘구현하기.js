// k = 노드의 개수
function solution(k, operations) {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);

  // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k
  let n = k;

  operations.forEach(operation => {
    const [order, x, y] = operation;

    if (order === 'u') {
      // x, y가 속한 집합을 합침
      // x, y는 노드1, 노드2
      union(parents, x, y);
    } else if (order === 'f') {
      // x가 속한 집합의 루트 노드를 찾음
      find(parents, x);
    }

    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  });

  return n;
}

function find(parents, x) {
  //루트 노드를 찾는 함수

  // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
  if (parents[x] === x) {
    return x;
  }

  // x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 이 부분이 경로 압축에 해당
  // (루트노드까지 쭉 타고 올라간다)
  // (루트노드의 x값이 전부다 해당 집합에 저장된다)
  parents[x] = find(parents, parents[x]);

  return parents[x];
}

function union(parents, x, y) {
  // 두 개의 집합을 합치는 함수

  // x가 속한 집합의 루트 노드 찾기
  const root1 = find(parents, x);
  // y가 속한 집합의 루트 노드 찾기
  const root2 = find(parents, y);

  // y가 속한 집합을 x가 속한 집합에 합침
  parents[root2] = root1;
}

console.log(
  solution(3, [
    ['u', 0, 1],
    ['u', 1, 2],
    ['f', 2],
  ])
);
