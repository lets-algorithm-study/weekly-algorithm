// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 정답: https://github.com/kciter/coding-interview-js/blob/main/solution/06.js

function solution(N, stages) {
  // 스테이지별 도전자 수를 구함
  // N+2로 한 이유는, 마지막 N번째 클리어한 사용자 때문에 N+1을 해야하지만,
  // 인덱스를 밑에서 그대로 활용하기위해 +1을 해줌 (0번째는 안씀)
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  // 스테이지별 실패한 사용자 수 계산
  const fails = {};
  let total = stages.length;

  // 각 스테이지를 순회하며, 실패율 계산
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      // 도전한 사람이 없는 경우, 실패율은 0
      fails[i] = 0;
      continue;
    }

    // 실패율 계산
    fails[i] = challenger[i] / total;

    // 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
    total -= challenger[i];
  }

  // 실패율이 높은 스테이지부터 내림차순으로 정렬
  const result = Object.entries(fails).sort(
    ([, aValue], [, bValue]) => bValue - aValue
  );

  return result.map(([key, value]) => Number(key));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]

function answer(N, stages) {
  // 각 스테이지별 도전자 수 구하기 (인덱스를 그대로 쓰자, 가장 끝 스테이지를 고려해서 N+2)
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  // 실패율 구하기
  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  return Object.entries(fails)
    .toSorted((a, b) => b[1] - a[1])
    .map(item => +item[0]);
}

console.log(answer(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
