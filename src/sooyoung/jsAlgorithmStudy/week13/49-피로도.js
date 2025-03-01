// 든든앤파이터라는 게임에는 피로도 시스템이 있습니다. 피로도는 정수로 표시하며 일정 피로도를
// 사용해서 던전을 탐험할 수 있는데 , 각 던전마다 탐험을 시작하기 위해 필요한 최소 필요 피로도와
// 던전 탐험을 마쳤을 때 소모되는 소모 피로도가 있습니다. 예를 들어 최소 필요 피로도가 80, 소모
// 피로도가 20 인 던전을 탐험하기 위해서는 유저의 현재 남은 피로도는 80 이상이어야 하고 , 던전
// 을 탐험한 후에는 피로도 20 이 소모됩니다. 이 게임에는 하루에 한 번만 탐험할 수 있는 던전이 여
// 러 개 있습니다. 한 유저가 오늘 던전을 최대한 많이 탐험하려 합니다. 유저의 현재 피로도 k 와 각
// 던전별 최소 필요 피로도 , 소모 피로도가 담긴 2 차원 배열 dungeons가 매개변수로 주어질 때 유
// 저가 탐험할 수 있는 최대 던전 수를 반환하는 solution() 함수를 완성하세요.
//   제약 조건
// • k 는 1 이상 5, 000 이하인 자연수입니다.
// • dungeons 의 세로 길이 , 즉 , 던전 개수는 1 이상 8 이하입니다.
// - dungeons의 가로 길이는 2 입니다.
//   dungeons의 각 행은 각 던전의 [ 최소 필요 피로도 , 소모 피로되 ] 입니다.
// - 최소 필요 피로도는 항상 소모 피로도보다 크거나 같습니다.
// - 최소 필요 피로도와 소모 피로도는 1 이상 1, 000 이하인 자연수입니다.
// - 서로 다른 던전의 [ 최소 필요 피로도 , 소모 피로도 ] 가 같을 수 있습니다.
// 12 백트래킹 497
// 입출력의 예
// k
// 80
// dungeons
//   [[80, 20], [50, 40], [30, 101]
// result
// 3
// 첫 번째 입출력을 봅시다. 현재 피로도는 80 입니다. 만약 첫 번째 -* 두 번째 -* 세 번째 순서로 던
// 전을 탐험하면 다음과 같이 피로도의 총량을 계산할 수 있습니다.

const solution = (k, dungeons) => {
  let maxDungeon = 0;
  const backtrack = (sum, start) => {
    if (sum > k) {
      return;
    }
    maxDungeon = Math.max(maxDungeon, start);
    for (let i = start; i < dungeons.length; i++) {
      backtrack(sum + dungeons[i][0] - dungeons[i][1], i + 1);
    }
  };

  backtrack(0, 0);
  return maxDungeon;
};

function dfs(curk, cnt, dungeons, visited) {
  let answerMax = cnt;
  for (let i = 0; i < dungeons.length; i++) {
    if ((curk >= dungeons[i][0]) & (visited[i] === 0)) {
      visited[i] = 1;
      answerMax = Math.max(
        answerMax,
        dfs(curk - dungeons[i][1], cnt + 1, dungeons, visited),
      );
      visited[i] = 0;
    }
  }
  return answerMax;
}

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);

  const answerMax = dfs(k, 0, dungeons, visited);
  return answerMax;
}
