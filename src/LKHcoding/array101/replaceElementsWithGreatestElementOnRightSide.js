// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxNum = -1;
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    const originalMaxNum = maxNum;
    if (arr[idx] > maxNum) {
      maxNum = arr[idx];
    }
    arr[idx] = originalMaxNum;
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
