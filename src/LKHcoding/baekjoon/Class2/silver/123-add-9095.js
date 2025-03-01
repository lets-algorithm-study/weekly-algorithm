const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

solution(input.map(Number));

function solution(input) {
  const memo = [0, 1, 2, 4, ...new Array(7).fill(0)];

  for (let i = 4; i <= 10; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  const answer = [];

  input.forEach(item => {
    answer.push(memo[item]);
  });

  console.log(answer.join('\n'));
}
