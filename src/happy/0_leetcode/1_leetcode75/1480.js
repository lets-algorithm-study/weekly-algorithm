/*
* [제목] 1480. Running Sum of 1d Array

* [문제] 
    Given an array nums.
    We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

* [예시] 
    1.
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

    2.
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

* [제약] 
    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6
/

// 코드
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  let sum = 0;

  nums.forEach((item) => {
    sum += item;
    result.push(sum);
  });

  return result;
};
