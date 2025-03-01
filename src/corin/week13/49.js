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
            // 재귀 호출하면서 다른 모든 경우의 수도 확인
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


// // -----
// // 1️⃣ 첫 번째 호출
// dfs(80, 0, dungeons, [0,0,0])
// // i = 0 일 때 (첫 번째 던전 선택)
// // 조건: 80 >= 80 && visited[0] === 0 -> true
// visited = [1,0,0]
// ↓
//     // 2️⃣ 두 번째 호출
//     dfs(60, 1, dungeons, [1,0,0])
//     // i = 1 일 때 (두 번째 던전 선택)
//     // 조건: 60 >= 50 && visited[1] === 0 -> true
//     visited = [1,1,0]
//     ↓
//         // 3️⃣ 세 번째 호출
//         dfs(20, 2, dungeons, [1,1,0])
//         // i = 2 일 때 (세 번째 던전 선택)
//         // 조건: 20 < 30 -> false
//         // 더 이상 진행 불가, count = 2 반환
//     ↓
//     visited = [1,0,0] (백트래킹)
//     // i = 2 일 때 (세 번째 던전 선택)
//     // 조건: 60 >= 30 && visited[2] === 0 -> true
//     visited = [1,0,1]
//     ↓
//         // 4️⃣ 네 번째 호출
//         dfs(50, 2, dungeons, [1,0,1])
//         // i = 1 일 때 (두 번째 던전 선택)
//         // 조건: 50 >= 50 && visited[1] === 0 -> true
//         visited = [1,1,1]
//         ↓
//             // 5️⃣ 다섯 번째 호출
//             dfs(10, 3, dungeons, [1,1,1])
//             // 모든 던전 방문 완료, count = 3 반환
//             // 이것이 최대값이 됨!

// // 이후 다른 순서들도 시도하지만 3보다 큰 값은 나오지 않음