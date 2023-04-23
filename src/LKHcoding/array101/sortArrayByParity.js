//
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let evenArr = [];
  let oddArr = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      oddArr.push(num);
    }
  }
  return evenArr.concat(oddArr);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
sortArrayByParity([3, 1, 2, 4]);
