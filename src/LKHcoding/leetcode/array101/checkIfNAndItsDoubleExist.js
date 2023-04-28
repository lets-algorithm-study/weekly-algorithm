// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  if (arr.length === 0) {
    return false;
  }
  if (arr === null) {
    return false;
  }

  // 해시테이블 사용
  let numSet = new Set();
  for (let idx = 0; idx < arr.length; idx++) {
    if (numSet.has(arr[idx] * 2) || numSet.has(arr[idx] / 2)) {
      return true;
    }
    numSet.add(arr[idx]);
  }

  // 아래는 선형탐색
  // for (let idx = 0; idx < arr.length; idx++) {
  //   for (let j = idx + 1; j < arr.length; j++) {
  //     if (arr[idx] * 2 === arr[j]) {
  //       return true;
  //     }
  //     if (arr[idx] % 2 === 0) {
  //       if (arr[idx] / 2 === arr[j]) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  return false;
};
console.log(checkIfExist([10, 2, 5, 3]));
checkIfExist([10, 2, 5, 3]);
