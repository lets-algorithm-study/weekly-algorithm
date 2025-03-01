const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ');
const problem = input.splice(N);

solution(+N, +M, input, problem);

function solution(N, M, data, problem) {
  const map = new Map();

  data.forEach((item, idx) => {
    map.set(item, idx + 1);
  });

  const answer = [];

  problem.forEach(item => {
    if (isNaN(+item)) {
      // 숫자가 아닌경우
      answer.push(map.get(item));
    } else {
      // 숫자인경우
      answer.push(data[item - 1]);
    }
  });

  console.log(answer.join('\n'));
}
