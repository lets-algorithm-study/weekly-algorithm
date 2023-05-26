// https://school.programmers.co.kr/learn/courses/30/lessons/120923#qna

function solution(num, total) {
  const reverseFactorial = (number, count) => {
    let tmpNum = 0;
    for (let i = count; i > 0; --i) {
      tmpNum += number;
      --number;
    }
    return tmpNum;
  };

  if (num === 1) {
    return [total];
  }

  for (let i = total + 50; i > -50; --i) {
    if (reverseFactorial(i, num) === total) {
      return new Array(num)
        .fill(0)
        .map((item, idx) => i - idx)
        .sort((a, b) => a - b);
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
