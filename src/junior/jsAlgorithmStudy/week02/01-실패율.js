// 내림차순으로 정렬된 실패율이 높은 스테이지 배열 구하기

// 1. challenger는 각 스테이지의 도전자 수를 저장.
// 2. 스테이지 번호에 해당하는 인덱스를 증가시켜서 몇 명의 사용자가 해당 스테이지에 멈춰 있는지 카운트.
// 3. 실패율은 도전자 수를 전체 사용자 수로 나눈 값으로 계산.
// 4. 스테이지를 지나간 사용자를 제외하면서 반복.
// 5. Object.entries(fails)를 통해 실패율 데이터를 배열 형태로 변환.
// 6. sort를 사용해서 실패율이 높은 순으로 정렬
// 7. 스테이지 번호만 반환하도록 map을 적용

function solution(N, stages) {
  // 스테이지별 도전자 수
  const challenger = new Array(N + 2).fill(0);

  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0; // 도전자가 없으면 실패율 0
      continue;
    }
    fails[i] = challenger[i] / total; // 실패율 계산
    total -= challenger[i]; // 다음 스테이지로 이동한 사용자 제외
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map(v => Number(v[0]));
}
