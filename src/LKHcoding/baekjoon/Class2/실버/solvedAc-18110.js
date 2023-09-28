const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift(); // 첫째줄 제거

solution(input);

function solution(input) {
  input.sort((a, b) => a - b);

  const cutLength = Math.round(input.length * 0.15);
  const data = input.slice(cutLength, input.length - cutLength);

  const answer = Math.round(
    // NaN 때문에 통과 못하는 케이스가 있었음 분모에 0이 들어가면 NaN발생
    data.reduce((acc, cur) => acc + cur, 0) / (data.length || 1)
  );

  console.log(answer);
}
