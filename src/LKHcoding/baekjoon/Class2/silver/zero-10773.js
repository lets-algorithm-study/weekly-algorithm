const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const data = input.map(Number);

solution(data);

function solution(data) {
  const stack = [];

  data.forEach(item => {
    if (item === 0) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
}
