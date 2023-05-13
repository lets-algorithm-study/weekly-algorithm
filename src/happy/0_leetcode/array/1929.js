/*
* [제목] 1929. Concatenation of Array

* [문제] 
    Given an integer array nums of length n, 
    
    you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

    Specifically, ans is the concatenation of two nums arrays.

    Return the array ans.

* [예시] 
    1.
    Input: nums = [1,2,1]
    Output: [1,2,1,1,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
    - ans = [1,2,1,1,2,1]

* [제약] 
    n == nums.length
    1 <= n <= 1000
    1 <= nums[i] <= 1000
/

// 코드
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums];
};