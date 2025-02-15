//전력망을 둘로 나누기

function solution(n, wires) {
    // 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    let minDifference = n;
    
    // 각 전선을 하나씩 끊어보기
    for (const [v1, v2] of wires) {
        // v1에서 시작하는 네트워크 크기 계산
        const count1 = countConnected(v1, v2, null);
        const count2 = n - count1;
        
        minDifference = Math.min(minDifference, Math.abs(count1 - count2));
    }

    // DFS로 연결된 노드 수를 세는 함수
    function countConnected(node, excluded, parent) {
        let count = 1;
        
        for (const next of graph[node]) {
            // excluded(끊어진 노드)이거나 부모 노드면 건너뛰기
            if (next === excluded || next === parent) continue;
            count += countConnected(next, excluded, node);
        }
        
        return count;
    }
    
    return minDifference;
}

