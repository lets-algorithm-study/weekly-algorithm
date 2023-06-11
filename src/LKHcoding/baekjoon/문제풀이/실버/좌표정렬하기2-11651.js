const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const coordinates = input.slice(1).map(item => item.split(' ').map(Number));

solution(N, coordinates);

function solution(N, coordinates) {
  coordinates.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  console.log(coordinates.map(item => item.join(' ')).join('\n'));
}
