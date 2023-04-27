// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  const asStr = order.toString();
  let res = 0;
  for (const n of asStr) {
    if (n === '3' || n === '6' || n === '9') {
      ++res;
    }
  }

  return res;
}