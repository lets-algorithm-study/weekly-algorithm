/** 문제
 * 기본적으로 제공해주는 형변환을 사용하지 않고 numToString 함수를 구현하라. */

/**
 * 풀이 전략 (이대로 풀어볼 예정)
 * 일단 소수점이 있다면 정수로 만들기위해 count 를 세면서 10씩 곱한다.
 * 0~9까지 각 string 으로 매칭되는 dict 를 만든다.
 * % 10 으로 연산하면서 1의자릿수 나머지를 구하고 그걸 tmp 배열에 담아둔다.
 * % 10 연산 후 나누기 10을 해서 다음 자릿수도 1의 자릿수로 만들고 % 10연산 반복
 * tmp 배열의 string 들을 합칠때 소수점 count 위치에 '.'을 끼워넣어준다.
 */
function numToString(num) {
  console.log('=> numToString.js:13 ~ num', num);
  // 풀이 작성

  return '';
}

console.log(numToString(23)); // '23'
console.log(numToString(23.1)); // '23.1'
