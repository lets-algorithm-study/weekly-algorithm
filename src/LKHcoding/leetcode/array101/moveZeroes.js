// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let numCursorIdx = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] !== 0) {
      nums[numCursorIdx] = nums[idx];
      numCursorIdx++;
    }
  }

  for (let idx = numCursorIdx; idx < nums.length; idx++) {
    nums[idx] = 0;
  }
};
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
