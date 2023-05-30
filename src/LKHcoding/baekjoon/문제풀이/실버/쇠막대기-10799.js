// https://www.acmicpc.net/problem/10799

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(pipes) {
  const checkLaserLocation = pipes.replaceAll('()', '.').split('');

  let answer = 0;
  let pipeNum = 0;

  for (let i = 0; i < checkLaserLocation.length; i++) {
    if (checkLaserLocation[i] === '(') {
      ++pipeNum;
    }
    if (checkLaserLocation[i] === ')') {
      --pipeNum;
      ++answer;
    }
    if (checkLaserLocation[i] === '.') {
      answer += pipeNum;
    }
  }

  console.log(answer);
}

/**
 * 이 문제를 스택을 사용하지 않고 풀어버렸다.
 * 이런 류의 문제가 나올때 스택을 떠올릴 수 있어야 할듯.
 * (이 문제 자체가 쇠파이프를 겹친다고 표현 했지만 스택이나 마찬가지 )
 */
