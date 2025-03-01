const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(filePath).toString().trim().split(' ');

solution(+N, +K);

function solution(N, K) {
  const answer = [];
  const circleArr = Array.from(Array(N), (v, k) => k + 1);

  let movedCursorCnt = 1;
  let cursor = 0;

  while (circleArr.length > 0) {
    if (movedCursorCnt === K) {
      answer.push(circleArr[cursor]);
      circleArr.splice(cursor, 1);
      cursor--;
      movedCursorCnt = 0;
    }

    cursor++;
    if (cursor > circleArr.length - 1) {
      cursor = 0;
    }
    movedCursorCnt++;
  }
  console.log(`<${answer.join(', ')}>`);
}

/**
 * 디버깅을 좀 하면서 풀었다.
 * 그리 어려운 난이도 까진 아닌것 같은데
 * 디버깅 없이 풀려면 좀 헷갈려서 시간을 잡아먹을듯 한 느낌이 들었음.
 */
