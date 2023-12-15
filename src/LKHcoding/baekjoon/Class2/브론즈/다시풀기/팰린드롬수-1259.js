const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const _palindromes = input.filter(item => item !== '0');

solution(_palindromes);

function solution(palindromes) {
  const chars = palindromes.map(item => item.split(''));

  const answer = [];

  chars.forEach(item => {
    for (let i = 0; i <= item.length - 1; i++) {
      if (item[i] === item[item.length - 1 - i]) {
        if (i === item.length - 1) {
          answer.push('yes');
        }
      } else {
        answer.push('no');
        break;
      }
    }
  });

  console.log(answer.join('\n'));
}
