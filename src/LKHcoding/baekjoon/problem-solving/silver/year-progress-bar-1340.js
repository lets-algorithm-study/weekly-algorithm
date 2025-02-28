const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(str) {
  const date = new Date(str);

  const curYear = date.getFullYear();

  const 해당년도총시간 = new Date(curYear, 0, 1).getTime();
  const 올해지난시간 = date.getTime() - 해당년도총시간;
  const 다음년도총시간 = new Date(curYear + 1, 0, 1).getTime();
  const diff = 다음년도총시간 - 해당년도총시간;

  console.log((올해지난시간 / diff) * 100);
}
