// 여러 줄 입력
/* fs Module */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(item => +item);

solution(input);

// 문제 풀이
function solution(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      const tmpNum = [...num];
      tmpNum.splice(j, 1);
      tmpNum.splice(i, 1);

      const sum = tmpNum.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      if (sum === 100) {
        console.log(tmpNum.join('\n'));
        break;
      }
    }
  }
}

/**
 * 투포인터로 모든 경우의 수 돌면서 풀었다. (브루트포스)
 * 브루트포스로 풀면 되는건지 확신이 잘 안섰다.
 * 시간제한과 Input 의 종류를 보고 풀이방법을 정할 수 있게 더 연습이 필요
 */
