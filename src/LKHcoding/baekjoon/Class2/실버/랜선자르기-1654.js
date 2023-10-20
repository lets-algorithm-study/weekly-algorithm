const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [K, N] = input.shift().split(' ');

solution(+K, +N, input.map(Number));

function solution(K, N, input) {
  // 이진 탐색의 시작점과 끝점 설정. low는 1, high는 입력 중 가장 큰 값.
  let low = 1;
  let high = Math.max(...input);
  let answer = 0;

  // 이진 탐색 시작
  while (low <= high) {
    // 중간값 계산
    const mid = Math.floor((low + high) / 2);
    let sum = 0;

    // 각 랜선을 mid로 나눈 몫을 sum에 더함 (몇 개의 랜선을 만들 수 있는지 계산)
    input.forEach(item => {
      sum += Math.floor(item / mid);
    });

    // 만약 N개 이상의 랜선을 만들 수 있다면, 가능한 랜선의 길이는 mid 이상이다.
    // 따라서 low 를 mid + 1로 업데이트.
    if (sum >= N) {
      answer = mid; // 답을 mid로 업데이트
      low = mid + 1; // 탐색 범위의 최소값을 mid + 1로 업데이트
    } else {
      // N개 미만의 랜선만 만들 수 있다면, 가능한 랜선의 길이는 mid 미만이다.
      // 따라서 high를 mid - 1로 업데이트.
      high = mid - 1; // 탐색 범위의 최대값을 mid - 1로 업데이트
    }
  }

  // 최적의 랜선 길이 출력
  console.log(answer);
}
