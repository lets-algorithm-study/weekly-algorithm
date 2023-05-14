// https://school.programmers.co.kr/learn/courses/30/lessons/120836
function solution(n) {
  let count = 0;
  const sqrtN = Math.sqrt(n);
  for (let i = 1; i <= sqrtN; ++i) {
    if (n % i === 0) {
      count++;
    }
  }
  // 정수면 제곱근이 있다는 뜻이므로 count 에서 빼기 1 한다(앞뒤 똑같은 순서쌍)
  return Number.isInteger(sqrtN) ? count * 2 - 1 : count * 2;
}
