// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

  let set = new Set();

  for (let idx = 0; idx < nums.length; idx++) {
    set.add(nums[idx]);
  }

  const result = [];

  for (let idx = 0; idx < nums.length; idx++) {
    if (!set.has(idx+1)) {
      result.push(idx+1);
    }
  }

  return result;

  // 곱하기 -1을 해서 양수만 찾아서 result만들어내는 방식으로 풀어보기
};

findDisappearedNumbers([5, 4, 6, 7, 9, 3, 10, 9, 5, 6]);
