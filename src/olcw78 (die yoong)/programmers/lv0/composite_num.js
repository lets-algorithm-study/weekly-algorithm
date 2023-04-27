// https://school.programmers.co.kr/learn/courses/30/lessons/120846
function solution(n) {
  let res = 0;
  for (let i = 1; i <= n; ++i) {
    let cnt = 0;
    for (let j = 1; j <= i; ++j) {
      if (i % j === 0) {
        ++cnt;

        if (cnt >= 3) {
          ++res;
          break;
        }
      }
    }
  }
  return res;
}