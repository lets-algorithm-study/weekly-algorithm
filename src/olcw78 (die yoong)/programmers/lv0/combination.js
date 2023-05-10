function fibonacci(n) {
  if (n === 1 || n === 0) return 1;
  return n * fibonacci(n - 1);
}

function solution(balls, share) {
  return fibonacci(balls) / (fibonacci(balls - share) * fibonacci(share));
}

console.log(solution(30, 0));