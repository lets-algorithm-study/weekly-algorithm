// https://school.programmers.co.kr/learn/courses/30/lessons/120912
function solution(array) {
  let cnt = 0;
  for (const c of array.join()) {
    if (c === '7') ++cnt;
  }
  return cnt;
}
