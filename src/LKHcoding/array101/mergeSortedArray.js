// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return;
  }

  let j = n - 1;
  let k = m - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (j < 0) {
      break;
    }
    if (nums1[k] >= nums2[j]) {
      nums1[i] = nums1[k];
      k--;
    } else {
      nums1[i] = nums2[j];
      j--;
    }
  }
};

merge([2, 3, 4, 0, 0, 0], 3, [1, 5, 6], 3);
