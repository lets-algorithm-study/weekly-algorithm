
/*
* [제목] 
35. Search Insert Position


* [문제] 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

* [예시] 
1.
Input: nums = [1,3,5,6], target = 5
Output: 2

2.
Input: nums = [1,3,5,6], target = 2
Output: 1

* [제약] 
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            result = i;
            break;
        }
    }

    return result === -1 ? nums.length : result;
}