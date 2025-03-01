// https://school.programmers.co.kr/learn/courses/30/lessons/87946?language=javascript

function solution(k, dungeons) {
  // k는 유저의 현재 피로도
  // dungeons는 [최소 필요 피로도, 소모피로도] 가 담긴 2차원 배열

  // 방문한 던전을 체크하기 위한 배열
  const visited = Array(dungeons.length).fill(false);

  // 최대 던전 탐험 횟수
  let maxCount = 0;

  // DFS로 모든 가능한 던전 순서를 탐색
  function dfs(fatigue, count) {
    // 현재까지의 탐험 횟수와 최대 탐험 횟수 비교하여 갱신
    maxCount = Math.max(maxCount, count);

    // 모든 던전을 확인
    for (let i = 0; i < dungeons.length; i++) {
      const [최소필요피로도, 소모피로도] = dungeons[i];

      // 아직 방문하지 않았고, 현재 피로도로 던전 탐험이 가능한 경우
      if (!visited[i] && fatigue >= 최소필요피로도) {
        visited[i] = true; // 방문 표시

        // 던전 탐험 후 피로도 감소시키고 다음 던전으로
        dfs(fatigue - 소모피로도, count + 1);
        
        visited[i] = false; // 방문 취소 (백트래킹)
      }
    }
  }

  // 초기 피로도와 탐험 횟수 0으로 DFS 시작
  dfs(k, 0);

  return maxCount;
}

// 테스트 함수
function testSolution() {
  const testCases = [
    {
      k: 80,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10],
      ],
      expected: 3,
      description: '기본 예시 - 문제에서 제공된 테스트 케이스',
    },
    {
      k: 20,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10],
      ],
      expected: 0,
      description: '모든 던전을 돌 수 없는 경우',
    },
    {
      k: 60,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10],
      ],
      expected: 2,
      description: '일부 던전만 돌 수 있는 경우',
    },
    {
      k: 50,
      dungeons: [
        [30, 10],
        [30, 10],
        [30, 10],
      ],
      expected: 3,
      description: '모든 던전의 최소 필요 피로도가 같은 경우',
    },
    {
      k: 50,
      dungeons: [[30, 10]],
      expected: 1,
      description: '던전이 하나인 경우',
    },
    {
      k: 100,
      dungeons: [
        [100, 30],
        [90, 20],
        [80, 40],
        [70, 10],
        [60, 20],
        [50, 5],
      ],
      expected: 4,
      description: '더 많은 던전이 있는 복잡한 경우',
    },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { k, dungeons, expected, description } = testCases[i];
    const result = solution(k, dungeons);
    const pass = result === expected;

    console.log(`테스트 #${i + 1}: ${description}`);
    console.log(`  입력: k=${k}, dungeons=${JSON.stringify(dungeons)}`);
    console.log(`  기대 결과: ${expected}, 실제 결과: ${result}`);
    console.log(`  테스트 ${pass ? '통과 ✓' : '실패 ✗'}`);
    console.log('------------------------');
  }
}

// 테스트 실행
testSolution();
