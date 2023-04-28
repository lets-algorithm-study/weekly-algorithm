// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const numsStrArr = nums.toString().replaceAll(",", "");
  const splitedStr = numsStrArr.split("0");

  let largestLength = 0;
  splitedStr.map((item) => {
    if (largestLength < item.length) {
      largestLength = item.length;
    }
  });

  return largestLength;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
