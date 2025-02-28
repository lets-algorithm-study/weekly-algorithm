// https://school.programmers.co.kr/learn/courses/30/lessons/120840
function solution(balls, share) {
  const getFactorial = num => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  if (balls === share) {
    return 1;
  }
  return Math.round(getFactorial(balls) / (getFactorial(balls - share) * getFactorial(share)));
}

solution(5, 3);
