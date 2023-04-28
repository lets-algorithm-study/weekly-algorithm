// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] === val) {
  //     nums.splice(i, 1);
  //   }
  // }
  // return nums.length;

  // 이중포문 돌 필요 없음. 투포인터로 해결 가능.
  // let numsLength = nums.length;
  // const deleteAtIdx = (idx) => {
  //   nums[idx] = null;
  //   for (let i = idx; i < numsLength; i++) {
  //     if (nums[i + 1] !== undefined) {
  //       nums[i] = nums[i + 1];
  //     }
  //   }
  //   numsLength--;
  // };
  // for (let idx = nums.length; idx >= 0; idx--) {
  //   if (nums[idx] === val) {
  //     deleteAtIdx(idx);
  //   }
  // }
  // return numsLength;

  let numsLength = nums.length;
  let writeCursor = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (val !== nums[idx]) {
      nums[writeCursor] = nums[idx];
      writeCursor++;
    } else {
      numsLength--;
    }
  }

  return numsLength;
};

// [0,1,2,2,3,0,4,2]
// 2
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
