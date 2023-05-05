// https://school.programmers.co.kr/learn/courses/30/lessons/12945#qna

// recursive
//function fibonacci(n) {
//    if (n === 2 || n === 1) return 1;
//    return fibonacci(n - 1) + fibonacci(n - 2);
//}

function solution(n) {
  const f = [ 0, 1 ];
  // 47번째 피보나치 수는 2,971,215,073. int max 보다 큼 -> overflow
  for (let i = 2; i <= n; ++i) {
    f[i] = (f[i - 1] + f[i - 2]) % 1234567;
  }

  return f[n];
}