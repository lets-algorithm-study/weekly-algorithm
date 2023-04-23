// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;

  let tmpNum = num;
  while (true) {
    if (tmpNum !== 0) {
      count += 1;
    } else {
      break;
    }
    const numStr = `${tmpNum}`;
    const isOdd = +numStr[numStr.length - 1] % 2 !== 0;

    if (isOdd) {
      // 홀수면
      tmpNum -= 1;
    } else {
      // 짝수면
      tmpNum = tmpNum / 2;
    }
  }
  return count;
};
