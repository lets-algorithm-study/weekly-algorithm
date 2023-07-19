const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

solution(+input);

function solution(n) {
  let zeroCount = 0;

  while (n > 0) {
    n = Math.trunc(n / 5);
    zeroCount += n;
  }

  console.log(zeroCount);
}
