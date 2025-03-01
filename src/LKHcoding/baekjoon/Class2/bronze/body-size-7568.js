/* fs Module */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.shift();

const data = input.map(item => item.split(' ').map(Number));

solution(data);

function solution(data) {
  const answer = [];

  data.forEach(item => {
    let count = 1;
    for (let i = 0; i < data.length; i++) {
      if (item[0] < data[i][0] && item[1] < data[i][1]) {
        count++;
      }
    }
    answer.push(count);
  });

  console.log(answer.join(' '));
}
