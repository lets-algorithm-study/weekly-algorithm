// 49. 피로도

//백트래킹을 위한 dfs 함수 생성
function dfs(curk, count, dungeons, visited) {
    let answerMax = count;
    for (let i = 0; i < dungeons.length; i++) {
        // 현재 피로도가 i번째 던전의 최소 필요 피로도보다 크거나 같고,
        // i번째 던전을 방문한 적이 없다면
        if (curk >= dungeons[i][0] && visited[i] === 0) {
            visited[i] = 1;
            // 현재까지의 최대 탐험 가능 던전 수와
            // i번째 던전에서 이동할 수 있는 최대 탐험 가능 던전 수 중 큰 값을 선택하여 업데이트
            answerMax = Math.max(answerMax, dfs(curk - dungeons[i][1], count + 1, dungeons, visited));
            // 백트래킹을 위해 방문 표시를 해제
            // 다음 경로 탐색을 위해 현재 던전의 방문 여부를 초기화해야 함
            visited[i] = 0;
        }
    }
    return answerMax;
}

function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(0);
    const answerMax = dfs(k, 0, dungeons, visited);
    return answerMax;
}