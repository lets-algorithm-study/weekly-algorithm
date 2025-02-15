// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    // 양방향으로 다 푸시 해준다. (연결이니까)
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) {
      // 현재 노드의 자식 노드들에 방문
      if (child !== parent) {
        // 부모 노드가 아닌 경우에만 탐색
        cnt += dfs(child, node);
      }
    }

    return cnt;
  }

  let minDiff = Infinity;

  for (const [a, b] of wires) {
    // 간선 제거
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    // 각 전력망 송전탑 개수 계산
    const cntA = dfs(a, b);
    const cntB = n - cntA;

    minDiff = Math.min(minDiff, Math.abs(cntA - cntB));

    // 간선 복원
    graph[a].push(b);
    graph[b].push(a);
  }

  return minDiff;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
