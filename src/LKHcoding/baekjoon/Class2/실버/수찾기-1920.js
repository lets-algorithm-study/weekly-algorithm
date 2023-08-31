const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const A = input[1].split(' ').map(Number);
const B = input[3].split(' ').map(Number);

solution(A, B);

function solution(A, B) {
  const answer = [];

  const set = new Set(A);

  B.forEach(item => {
    answer.push(set.has(item) ? 1 : 0);
  });

  console.log(answer.join('\n'));
}
