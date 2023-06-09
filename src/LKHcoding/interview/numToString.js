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
  if (num === 0) {
    return '0';
  }

  const dict = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };

  const isNegative = num < 0;

  num = Math.abs(num);

  let numTemp = num;
  let decimalCount = 0;

  while (numTemp % 1 !== 0) {
    numTemp *= 10;
    decimalCount++;
  }

  let numStr = '';
  while (numTemp > 0) {
    let singleDigit = numTemp % 10;
    numStr = dict[singleDigit] + numStr;
    numTemp = Math.floor(numTemp / 10);

    if (numStr.length === decimalCount && numTemp > 0) {
      numStr = '.' + numStr;
    }
  }

  if (numStr.length < decimalCount) {
    let zeros = '.' + '0'.repeat(decimalCount - numStr.length);
    numStr = zeros + numStr;
  }

  if (isNegative) {
    numStr = '-' + numStr;
  }

  return numStr;
}

console.log(numToString(203)); // '203'
console.log(numToString(2300.001)); // '2300.001' -> 부동소수점 문제 생기네...? 별로 중요하진 않은 문제 케이스
console.log(numToString(-203)); // '23.1'
console.log(numToString(-230.1)); // '23.1'
console.log(numToString(0)); // '23.1'
