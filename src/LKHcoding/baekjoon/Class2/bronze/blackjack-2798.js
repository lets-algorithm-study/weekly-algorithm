const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const line1 = input[0].split(' ').map(Number);
const line2 = input[1].split(' ').map(Number);

solution(line1, line2);

function solution([N, M], cards) {
  let answer = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= M) {
          answer = Math.max(answer, sum);
        }
      }
    }
  }

  console.log(answer);
}
