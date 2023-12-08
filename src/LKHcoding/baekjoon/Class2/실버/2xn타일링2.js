const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

// https://ahn3330.tistory.com/76
function solution(input) {
  const arr = [1, 3];

  for (let i = 2; i <= input; ++i) {
    arr.push((arr[i - 1] + arr[i - 2] * 2) % 10007);
  }

  console.log(arr[input - 1]);
}
