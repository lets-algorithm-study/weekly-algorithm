// 10진수를 입력받아 2진수로 변환해 반환하는 solution() 함수를 구현하세요

// 제약조건 decimal은 1 이상 10억 미만의 자연수

function solution(decimal) {
  let binary = '';

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
// 연산량이 많아졌을때 배열이 유리할 수 있다.