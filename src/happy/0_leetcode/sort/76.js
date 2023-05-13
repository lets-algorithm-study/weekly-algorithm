
/*
* [제목] 
76. Minimum Window Substring

* [문제] 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

* [예시] 
1.
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

2.
Input: nums = [2,0,1]
Output: [0,1,2]

* [제약] 
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.

*/

// 코드
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 선택 정렬
    // 맨 앞부터 주어진 리스트에서 최소값을 찾아서 맨앞과 교환
    // 맨 앞을 제외한 나머지 리스트에서 최소값을 찾아서 두번째 인덱스와 교환 > 반복
    for(let i = 0; i < nums.length; i++){
        let minIndex = i;

        for(let k = i; k < nums.length; k++){

            if(nums[minIndex] > nums[k]){
                minIndex = k;
            }
        }

        let tmp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = tmp;
    }

    return nums;
};