// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// nCm -> n개 중 m 개를 순서 상관없이 뽑는 경우의 수
// n! / ((n-m)! * m!)
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    res *= i;
  }
  return res;
}

function factorialRecursively(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) /
    (factorial(balls - share) * factorial(share))
  );
}