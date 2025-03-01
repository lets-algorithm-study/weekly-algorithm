const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(input) {
  let count = 0;
  let idx = 0;
  while (true) {
    ++idx;
    if (!`${idx}`.includes('666')) {
      continue;
    }
    ++count;

    if (input === count) {
      break;
    }
  }

  console.log(idx);
}
