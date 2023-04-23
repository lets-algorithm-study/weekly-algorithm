/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sortedArr = nums.slice().sort((a, b) => a - b);

  let isMaximum = Infinity;
  let count = 0;
  for (let idx = sortedArr.length - 1; idx >= 0; idx--) {
    if (isMaximum > sortedArr[idx]) {
      isMaximum = sortedArr[idx];
      count++;
    }
    if (count === 3) {
      break;
    }
  }
  if (count < 3) {
    return sortedArr[sortedArr.length - 1];
  }
  return isMaximum;
};

thirdMax([3, 2, 1]);
