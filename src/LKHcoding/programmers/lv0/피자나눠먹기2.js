// https://school.programmers.co.kr/learn/courses/30/lessons/120815
function solution(n) {
  // 6과 n의 최소공배수를 구해야함

  // gcd는 최대공약수 구하는 함수 (유클리드 호제법)
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  // lcm은 최대공약수를 가지고 최소공배수 구하는 함수
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return lcm(6, n) / 6;

  // 아래는 그런거 없이 푸는법
  // let pizza = 1;
  // while (pizza * 6 % n) {
  //     pizza++;
  // }
  // return pizza;
}
