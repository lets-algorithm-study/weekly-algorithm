// 카카오배 양궁 대회가 열렸습니다. 라이언은 저번 카카오배 양궁 대회 우승자이고 이번 대회에도
// 결승전까지 올라왔습니다. 결승전 상대는 어피치입니다. 카카오 양궁 대회 운영위원회는 한 선
// 수의 연속 우승보다는 다양한 선수들이 양궁 대회에서 우승하기를 바랍니다. 따라서 양궁 대회 운
// 영위원회는 결승전 규칙을 전 대회 우승자인 라이언에게 불리하게 정했습니다.
// • 어피치가 화살 n 발을 다 쏜 후에 라이언이 화살 n 발을 쏩니다.
//   양궁 과녁판은 흔히 보는 원형의 형태입니다. 가운데부터 10, 9, 8, ..., 1, 0 점으로 계산합니다. k
// 점 (k 는 1~10사이의 자연수 ) 을 어피치가 a 발을 맞혔고 , 라이언이 b 발을 맞히면 더 많은 화살을 k
// 점에 맞힌 선수가 k 점을 가져갑니다.
//   단 a와 b가 같으면 ( 두 선수가 동일한 횟수로 과녁을 맞히면 ) 어피치가 k 점을 가져갑니다. 예를 들
// 어 어피치가 10 점을 2 발 맞혔고 , 라이언도 10 점을 2 발 맞히면 어피치가 10 점을 가져갑니다. 여기
// 서 20 점이 아닌 10 점을 가져간다는 점에 주의하세요. k 점을 여러 발 맞혀도 k 점만 가져갑니다. 또
// 한 a = b = 0 이면 그 누구도 k 점을 가져가지 않습니다. 다른 예도 볼까요 ? 어피치가 10 점을 0 발 ,
//   라이언이 10 점을 2 발 맞히면 라이언이 10 점을 가져갑니다. 최종 점수를 계산하여 점수가 더 높은
// 선수를 우승자로 결정합니다. 만약 최종 점수가 같다면 어피치가 우승자입니다.
//   현재 상황은 어피치가 화살 n 발을 다 쏜 후이고 , 라이언이 화살을 쏠 차례입니다. 라이언은 어피치
// 를 가장 큰 점수 차이로 이기기 위해서 n 발의 화살을 어떤 과녁 점수에 맞혀야 하는지 고민하고 있
// 습니다.
// 506 둘째 마당 코딩 테스트 완전 정복
// 화살의 개수를 담은 자연수 n, 어피치가 맞힌 과녁 점수의 개수를 10 점부터 0 점까지 순서대로 담
// 은 정수 배열 info 가 매개변수로 주어집니다. 이때 라이언이 가장 큰 점수 차이로 우승하기 위
// 해 n 발의 화살을 어디에 맞혀야 하는지를 10 점부터 0 점까지 순서대로 정수 배열에 담아 반환할
// solution() 함수를 구현하세요. 만약 라이언이 우승할 수 없다면 1를 반환하세요.
//   제약 조건
// • 1 ≤ n ≤ 10
// • info의 길이 = 1
//   - 0≤ info의 원소≤n - info의 원소 총합 = n
//   - info의 i 번째 원소는 과녁의 10- i 점을 맞힌 화살 개수 (i 는 0~10 사이의 정수)
// • 라이언이 우승할 방법이 있는 경우 반환할 정수 배열의 길이는 11
// 0≤ 반환할 정수 배열의 원소 S n
// - 반환할 정수 배열의 원소 총합 = n(n 발을 다 쏴야 함 )
// - 반환할 정수 배열의 i번째 원소는 과녁의 10- i 점을 맞힌 화살 개수 (1 는 0~10 사이의 정수)
// - 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 많다면 가장 낮은 점수를 더 많이 맞
// 힌 경우를 반환
// • 가장 낮은 점수를 맞힌 개수가 같으면 그다음으로 낮은 점수를 더 많이 맞힌 경우를 반환
// • 예를 들어 [2, 3, 1, 0, 0, 0, 0, 1, 3, 0, 0] 과 [2, 1, 0, 2, 0, 0, 0, 2, 3, 0, 이을 비교하면
//   [2, 1, 0, 2, 0, 0, 0, 2, 3, 0, 0] 을 반환
// • 10, 0, 2, 3, 4, 1, 0, 0, 0, 0, 과 [9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 이을 비교하면 [9, 0, 0,
//   0, 0, 0, 0, 0, 1, 0, 이을 반환
// • 라이언이 우승할 방법이 없으면 반환할 배열의 길이는 1
// - 라이언이 어떻게 화살을 쏘던 라이언 점수가 어피치 점수보다 낮거나 같으면 [-1] 을 반환
// 입출력의 예
// n info result
// 5 [2, 1, 1, 1,0,0, 0, 0, 0, 0, 0l [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 01
// 1 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] [-l]
// 9 [0, 0, 1, 2,0, 1, 1, 1, 1, 1, 1] [1, 1,2,0, 1, 2,2, 0, 0, 0, 이

function combinationsWithRepetition(arr, n) {
  if (n === 1) return arr.map(v => [v]);
  const result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx);
    const combis = combinationsWithRepetition(rest, n - 1);
    const combine = combis.map(v => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

function solution(n, info) {
  let maxdiff = 0;
  let maxComb = {};

  function calculateScore(combi) {
    let score1 = 0;
    let score2 = 0;
    for (let i = 0; i <= 10; i++) {
      if (info[10 - i] < combi.filter(x => x === i).length) {
        score1 += i;
      } else if (info[10 - i] > 0) {
        score2 += i;
      }
    }
    return [score1, score2];
  }

  function calculateDiff(diff, cnt) {
    if (diff > maxdiff) {
      maxComb = { ...cnt };
      maxdiff = diff;
    }
  }

  for (const combi of combinationsWithRepetition([...Array(11).keys()], n)) {
    const cnt = combi.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    const [score1, score2] = calculateScore(combi);
    const diff = score1 - score2;
    calculateDiff(diff, cnt);
  }

  if (maxdiff > 0) {
    const answer = Array(11).fill(0);
    for (const n of Object.keys(maxComb)) {
      answer[10 - n] = maxComb[n];
    }
    return answer;
  } else {
    return [-1];
  }
}
