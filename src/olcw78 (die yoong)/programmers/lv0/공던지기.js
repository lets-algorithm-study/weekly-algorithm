// https://school.programmers.co.kr/learn/courses/30/lessons/120843
function solution(numbers, k) {
  let res = 0;
  for (let i = 0, len = numbers.length; i < k; ++i) {
    const pos = (i * 2) % len;
    res = numbers[pos];
  }
  return res;
}