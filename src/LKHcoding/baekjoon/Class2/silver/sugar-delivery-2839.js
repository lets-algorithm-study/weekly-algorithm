const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(input) {
  let fiveKgBags = Math.floor(input / 5);
  let remaining = input % 5;

  while (fiveKgBags >= 0) {
    if (remaining % 3 === 0) {
      console.log(fiveKgBags + remaining / 3);
      return;
    }
    fiveKgBags--;
    remaining += 5;
  }

  console.log(-1);
}
