// https://school.programmers.co.kr/learn/courses/30/lessons/120840
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    res *= i;
  }
  return res;
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) /
    (factorial(balls - share) * factorial(share))
  );
}