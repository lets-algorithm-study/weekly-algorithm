// https://school.programmers.co.kr/learn/courses/30/lessons/120862#

// [1, 2, -3, 4, -5] -> 15
function solution(numbers) {
  let max = numbers[0] * numbers[1];
  const len = numbers.length;
  for (let i = 0; i < len; ++i) {
    for (let j = i + 1; j < len; ++j) {
      const cur = numbers[i] * numbers[j];
      if (max < cur) {
        max = cur;
      }
    }
  }

  return max;
}

// other ppl
function sol(numbers) {
  numbers.sort(($1, $2) => $1 - $2);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[number.length - 2]
  );
}
