//전력망을 둘로 나누기

function solution(n, wires) {
    // 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    let minDifference = n;  // 최대 차이로 초기화
    
    // 각 전선을 하나씩 끊어보기
    for (const [v1, v2] of wires) {
        const visited = Array(n + 1).fill(false);
        
        // v1에서 시작하는 네트워크 크기 계산
        // excluded로 v2를 전달하여 v1->v2로 가는 길을 차단
        const count1 = countConnected(v1, v2, visited);
        const count2 = n - count1;
        
        // 두 네트워크의 크기 차이 계산
        minDifference = Math.min(minDifference, Math.abs(count1 - count2));
    }
    
    return minDifference;
}

// DFS로 연결된 노드 수를 세는 함수
function countConnected(node, excluded, visited) {
    visited[node] = true;  // 현재 노드 방문 표시
    let count = 1;  // 현재 노드 카운트
    
    // 현재 노드와 연결된 모든 노드 확인
    for (const next of graph[node]) {
        // excluded(끊어진 노드)이거나 이미 방문한 노드는 건너뛰기
        if (next === excluded || visited[next]) continue;
        // 다음 노드로 이동하여 연결된 노드 수 계산
        count += countConnected(next, excluded, visited);
    }
    
    return count;
}

