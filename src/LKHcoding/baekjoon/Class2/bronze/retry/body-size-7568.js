/* fs Module */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.shift();

const data = input.map(item => item.split(' ').map(Number));

solution(data);

function solution(data) {
  console.log(
    data
      .map(item => data.filter(v => item[0] < v[0] && item[1] < v[1]).length + 1)
      .join(' ')
  );
}
