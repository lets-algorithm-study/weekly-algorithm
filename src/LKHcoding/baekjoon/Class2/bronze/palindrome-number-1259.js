const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const _palindromes = input.filter(item => item !== '0');

solution(_palindromes);

function solution(palindromes) {
  const answer = [];

  palindromes.forEach(item => {
    let start = 0;
    let end = item.length - 1;
    let isPalindrome = true;
    while (start < end) {
      if (!(item[start] === item[end])) {
        isPalindrome = false;
        break;
      }

      start++;
      end--;
    }
    answer.push(isPalindrome ? 'yes' : 'no');
  });

  console.log(answer.join('\n'));
}
