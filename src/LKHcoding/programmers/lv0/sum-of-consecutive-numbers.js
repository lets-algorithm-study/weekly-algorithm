// https://school.programmers.co.kr/learn/courses/30/lessons/120923#qna

function solution(num, total) {
  // 주어진 개수(count)에 따라 연속된 숫자의 합을 계산하는 함수
  const reverseFactorial = (number, count) => {
    let tmpNum = 0;
    for (let i = count; i > 0; --i) {
      tmpNum += number;
      --number;
    }
    return tmpNum;
  };

  // 주어진 숫자가 하나일 경우, total 값을 반환함
  if (num === 1) {
    return [total];
  }

  // 연속된 숫자 중 가장 큰 숫자를 계산함
  // num 이 짝수인 경우, 가장 큰 숫자는 평균에서 0.5만큼 빼줘야 함
  const maxInSequence = Math.floor(total / num + num / 2 - (num % 2 === 0 ? 0.5 : 0));

  // 가장 큰 숫자부터 시작해서 연속된 숫자의 합이 total 이 되는 숫자를 찾음
  // i는 연속된 숫자 중 가장 큰 숫자를 의미하며, i - (num - 1)은 연속된 숫자 중 가장 작은 숫자를 의미함
  // 따라서, i >= -num + 1은 연속된 숫자 중 가장 작은 숫자가 -99가 될 수 있음을 고려한 조건이 됨
  for (let i = maxInSequence; i >= -num + 1; --i) {
    // 만약 num 개의 연속된 숫자의 합이 total 이라면
    if (reverseFactorial(i, num) === total) {
      // 찾은 숫자를 기준으로 연속된 숫자의 배열을 생성하여 반환함
      return Array.from({ length: num }, (_, idx) => i - num + 1 + idx);
    }
  }
}

console.log(solution(1, 10));

// 입출력 예
// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]
