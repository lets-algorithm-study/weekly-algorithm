const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const data = input[0].split(' ').map(Number);

solution(data);

function solution(data) {
  const mappedData = data.map((item, idx) => ({
    idx: idx + 1,
    value: item,
  }));

  mappedData.sort((a, b) => a.value - b.value);

  let sum = 0;
  let answer = 0;

  mappedData.forEach(item => {
    sum += item.value;
    answer += sum;
  });

  console.log(answer);
}
