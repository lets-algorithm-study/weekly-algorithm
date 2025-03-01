const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [first, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const numbers = input.map(Number);

solution(numbers);

function solution(numbers) {
  console.log(numbers.sort((a, b) => a - b).join('\n'));
}
