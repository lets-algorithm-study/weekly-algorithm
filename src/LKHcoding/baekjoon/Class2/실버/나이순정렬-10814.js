/* fs Module */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const data = input.map(item => item.split(' '));

solution(data);

function solution(data) {
  data.sort((a, b) => +a[0] - +b[0]);

  console.log(data.map(item => item.join(' ')).join('\n'));
}
