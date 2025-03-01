const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.splice(0, 1); // 0번째 필요없어서 잘라내기

const inputArr = input.map(item => item.split(' ').map(Number));

solution(inputArr);

function solution(inputArr) {
  inputArr.sort(([x1, y1], [x2, y2]) => {
    if (x1 === x2) {
      return y1 - y2;
    }

    return x1 - x2;
  });
  console.log(inputArr.map(item => item.join(' ')).join('\n'));
}
