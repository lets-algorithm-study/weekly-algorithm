https://school.programmers.co.kr/learn/courses/30/lessons/12911

// n의 다음 큰 숫자와 n은 2진수로 변환하면 1의 갯수가 같다.
// n 보다 큰 가장 작은 수를 return 문제
const solution = (n) => {
  // 현재 값의 2진수 1의 갯수
  let answer = n.toString(2).split("1").length;
  // 현재 값보다 큰 수중 가장 가까운 2진수 1의 갯수가 같은 값
  while (1) {
    n++;
    if (n.toString(2).split("1").length === answer) {
      return n;
    }
  }
}