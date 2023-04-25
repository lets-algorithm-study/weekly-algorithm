/*
* [제목] 724. Find Pivot Index

* [문제] 
    Given an array of integers nums, calculate the pivot index of this array.
    The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
    If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
    Return the leftmost pivot index. If no such index exists, return -1.

* [예시] 
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11

    2.
    Input: nums = [1,2,3]
    Output: -1
    Explanation:
    There is no index that satisfies the conditions in the problem statement.

* [제약] 
    1 <= nums.length <= 104
    -1000 <= nums[i] <= 1000
/

// 코드
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let rightSum = nums.reduce((acc, cur) => acc + cur);
    let leftSum = 0;
  
    for (let pivot = 0; pivot < nums.length; pivot++) {
        // 입력의 전체합에서 왼쪽값을 빼면 오른쪽 값이 나옴
        rightSum -= nums[pivot];
  
    
      if (rightSum == leftSum) {
        return pivot;
      }
      leftSum += nums[pivot];
    }
  
    return -1;
  };