// https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript
function count1InBinaryNum(num) {
  let match = 1;
  while (num !== 1) {
    const mod = num % 2;
    if (mod === 1) {
      ++match;
    }
    num = Math.trunc(num / 2);
  }

  return match;
}

function solution(n) {
  const curCnt = count1InBinaryNum(n);
  let nextCnt = 0;

  while (curCnt !== nextCnt) {
    nextCnt = count1InBinaryNum(++n);
  }

  return n;
}