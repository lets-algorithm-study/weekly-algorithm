// 깊이 우선 탐색 순회

// graph - 배열
// start - 시작 노드
function solution(graph, start){
  // 그래프를 인접 리스트로 변환
  const adjList = {};
  graph.forEach(([u,v]) => {
    if(!adjList[u]) adjList[u] = []; // 인접 리스트를 만들 때, 새로운 노드를 처음 만나면 빈 배열로 초기화
    adjList[u].push(v); 
  });
  console.log("인접 리스트:", adjList);

  // console.log(adjList)
  // return;

  // DFS 탐색 함수 - 재귀 사용
  function dfs(node, visited, result) {
    console.log(`현재 노드: ${node}`);
    visited.add(node); //현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); //현재 노드(방문한 노드)를 결과 배열에 추가
    console.log(`방문 기록: ${Array.from(visited)}`);
    console.log(`현재까지 결과: ${result}`);

    (adjList[node] || []).forEach((neighbor) => { // 현재 노드와 인접한 노드 순회
      if( !visited.has(neighbor) ){ //아직 방문하지 않은 노드라면
        dfs(neighbor, visited, result);
      }
    })

  }

  // DFS를 순회한 결과를 반환
  const visited = new Set(); //방문 여부에 중복추가 안됨
  const result = [];
  dfs(start, visited, result); // 시작 노드에서 깊이 우선 탐색 시작
  return result; //DFS 탐색 결과 반환

}

solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A')
