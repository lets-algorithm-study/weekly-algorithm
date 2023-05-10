function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

// nCm -> n개 중 m 개를 순서 상관없이 뽑는 경우의 수
// n! / ((n-m)! * m!)
function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

console.log(solution(30, 0));