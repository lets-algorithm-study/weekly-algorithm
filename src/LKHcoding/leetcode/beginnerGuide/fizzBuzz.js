// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    if (isFizz && isBuzz) {
      result.push("FizzBuzz");
      continue;
    }
    if (isFizz) {
      result.push("Fizz");
      continue;
    }
    if (isBuzz) {
      result.push("Buzz");
      continue;
    }
    result.push(`${i}`);
  }
  return result;
};

fizzBuzz(3);
