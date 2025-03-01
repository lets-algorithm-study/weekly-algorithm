const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

solution(input.map(Number));

function solution(input) {
  const [go, back, height] = input;

  const canGo = go - back;

  const answer = Math.ceil((height - back) / canGo);

  console.log(answer);
}
