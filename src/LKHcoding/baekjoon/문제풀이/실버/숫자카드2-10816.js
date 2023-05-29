// https://www.acmicpc.net/problem/10816

/* fs Module */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const parameter = [];
for (let i = 0; i < input.length; ++i) {
  let arr = input[i].split(' ').map(item => +item);
  parameter.push(arr);
}

solution(parameter);

// 문제풀이
function solution(cardInfo) {
  let [, originalCardSet, , forCheckCardSet] = cardInfo;

  // originalCardSet을 해시로 만든다.
  // 한바퀴 돌면서 count를 센다.
  // forCheckCardSet을 돌면서 해시에서 몇갠지 알아내서 조합한다.

  const map = new Map();

  for (let i = 0; i < originalCardSet.length; i++) {
    map.set(originalCardSet[i], (map.get(originalCardSet[i]) || 0) + 1);
  }

  const answer = [];
  for (let i = 0; i < forCheckCardSet.length; i++) {
    answer.push(map.get(forCheckCardSet[i]) ?? 0);
  }
  console.log(answer.join(' '));
}

/**
 * 문제 풀면서 아쉬웠던점.
 * 문제를 풀 접근방식을 먼저 생각 해보지 않았음.
 * 처음엔 단순히 for문 돌려서 filter로 length구하려고 했는데
 * 시간초과 났음.(로직은 맞지만)
 * 두번째는 originalCardSet의 크기를 점점 줄여나가서 시간을 줄이려고 했는데
 * 메모리 초과가 났음.
 * 그때 아차 하고 문제 접근 방법에 대해서 다시 정리 하고
 * 해시를 사용해서 풀어냄
 */
