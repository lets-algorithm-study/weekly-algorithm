// 내림차순으로 정렬된 실패율이 높은 스테이지 배열 구하기

// N 전체 스테이지 갯수
// stages 사용자가 멈춰있는 스테이지 번호
//실패율 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 스테이지 갯수만큼 배열을 생성한다.

function solution(N, stages) {
  // 스테이지별 도전자 수
  const challenger = new Array(N + 2).fill(0);

  for (const stage of stages) {
    challenger[stage] += 1;
    console.log((challenger[stage] += 1));
  }

  // 실패한 사용자 수
  const fails = {};
  // 총 사용자 수
  let total = stages.length;

  // 스테이지를 돌면서 실패율을 계산한다.
  for (let i = 1; i <= N; i++) {
    // 도전자 수가 0이면 실패율 0;
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    // 실패율 계산 : 스테이지별 : 도전자 수 / 전체 도전자 수
    fails[i] = challenger[i] / total;
    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map(v => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
