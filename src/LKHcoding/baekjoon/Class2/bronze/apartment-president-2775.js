// https://dpsc615.tistory.com/98 - 표 참고

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

input.shift();

solution(input);

function solution(input) {
  const answer = [];

  const testCaseList = chunk(input, 2);

  testCaseList.forEach(item => {
    answer.push(solveProblem(item[0], item[1]));
  });

  console.log(answer.join('\n'));
}

function solveProblem(k, n) {
  // 2차원 배열 dp를 생성하여 각 층과 호수에 따른 거주자 수를 저장합니다.
  const dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  // 0층의 경우 각 호수에 대한 거주자 수를 초기화합니다.
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  // 1층부터 k층까지 각각의 층에 대해 거주자 수를 계산합니다.
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      // 현재 호수의 거주자 수는 이전 호수의 거주자 수와 이전 층의 같은 호수의 거주자 수를 더한 값입니다.
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  // k층의 n호에 해당하는 거주자 수를 반환합니다.
  return dp[k][n];
}

// 배열을 size 개로 다시 묶고 싶을때 쓸 함수
function chunk(data = [], size = 1) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}
