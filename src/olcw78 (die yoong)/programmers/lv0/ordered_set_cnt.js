// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록
// solution 함수를 완성해주세요.
// n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
function solution(n) {
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    if (n % i === 0) ++res;
  }
  return res;
  Number.isNaN()
}