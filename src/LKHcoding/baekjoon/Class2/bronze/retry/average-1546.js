const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const scores = input[1].split(' ').map(Number);

solution(N, scores);

function solution(N, scores) {
  const max = Math.max(...scores);

  const newScores = scores.map(item => (item / max) * 100);

  const sum = newScores.reduce((cur, acc) => cur + acc, 0);

  console.log(sum / scores.length);
}
