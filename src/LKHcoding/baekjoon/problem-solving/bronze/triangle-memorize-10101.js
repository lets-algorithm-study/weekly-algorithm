const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [A, B, C] = input;
solution(+A, +B, +C);
function solution(a, b, c) {
  let answer = '';
  const set = new Set([a, b, c]);

  if (a + b + c === 180) {
    if (set.size === 1) {
      answer = 'Equilateral';
    } else if (set.size === 2) {
      answer = 'Isosceles';
    } else {
      answer = 'Scalene';
    }
  } else {
    answer = 'Error';
  }

  console.log(answer);
}

// 브론즈문제라 쉽게 풀었음.
