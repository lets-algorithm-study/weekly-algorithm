const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(N) {
  let result = 0;
  for (let i = 1; i < N; i++) {
    let sum = 0;
    sum += i;
    `${i}`.split('').forEach(item => {
      sum += +item;
    });

    if (sum === N) {
      result = i;
      break;
    }
  }
  console.log(result);
}
