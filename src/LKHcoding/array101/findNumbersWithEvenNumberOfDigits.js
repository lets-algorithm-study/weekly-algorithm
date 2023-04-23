// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

// 자릿수가 짝수인 item의 갯수 반환

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
  let count = 0;
  nums.map((item) => {
    const numToStr = `${item}`;
    if (+numToStr.length % 2 === 0) {
      // 자릿수 짝수임
      count++;
    }
  });
  return count;
};

findNumbers([12, 345, 2, 6, 7896]);
