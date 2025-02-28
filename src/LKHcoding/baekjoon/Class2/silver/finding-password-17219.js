const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const passwordInfo = input.map(item => item.split(' ')).filter(item => !!item[1]);
const findPasswordList = input.map(item => item.split(' ')).filter(item => !item[1]);

solution(passwordInfo, findPasswordList);

function solution(passwordInfo, findPasswordList) {
  const dict = passwordInfo.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});

  const answer = [];

  findPasswordList.forEach(item => {
    if (dict[item]) {
      answer.push(dict[item]);
    }
  });

  console.log(answer.join('\n'));
}
