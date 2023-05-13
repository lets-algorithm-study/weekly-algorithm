
/*
* [제목] 
179. Largest Number

* [문제] 
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

* [예시] 
1.
Input: nums = [10,2]
Output: "210"

2.
Input: nums = [3,30,34,5,9]
Output: "9534330"

* [제약] 
*
1 <= nums.length <= 100
0 <= nums[i] <= 109

*/

// 코드
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(!nums || nums.length === 0) {
        return '0';
    }

    // 문자열끼리 덧셈 제외 계산이 된다. 붙였을 때, 큰 결과가 앞으로 간다. (내림차순)
    /**
     * 이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬
     * 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬
     */
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

    if(nums[0] === 0) {
        return '0';
    }
    return nums.join('');
};
