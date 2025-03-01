// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  let tmpNumbers = numbers;
  const strToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let answer = '';
  while (tmpNumbers) {
    Object.entries(strToNum).map(([key, value]) => {
      if (tmpNumbers.startsWith(key)) {
        answer += value;
        tmpNumbers = tmpNumbers.slice(key.length);
      }
    });
  }
  return +answer;
  // replaceAll로 0부터 9까지 도는 방법도 있음
  // 정규표현식으로 하는 방법도 있음
}
