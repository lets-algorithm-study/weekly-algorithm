const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

solution(input);

function solution(input) {
  const [start, end] = input;
  const size = end - start + 1;
  const map = new Array(size).fill(true);

  // 1은 소수가 아니다.
  if (start === 1) map[0] = false;

  // 에라토스테네스의 체 사용
  for (let i = 2; i * i <= end; i++) {
    let j = Math.max(Math.ceil(start / i), 2) * i; // j는 start 이상, i의 배수 중 가장 작은 수
    for (; j <= end; j += i) {
      map[j - start] = false;
    }
  }

  const answer = [];
  for (let i = 0; i < size; i++) {
    if (map[i]) {
      answer.push(start + i);
    }
  }

  console.log(answer.join('\n'));
}
