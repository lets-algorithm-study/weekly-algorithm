// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  // if (arr.length < 3) {
  //   return false;
  // }
  //
  // let isIncreased = null;
  // let isDecreased = null;
  // for (let idx = 0; idx < arr.length; idx++) {
  //   if (arr[idx + 1] === undefined) {
  //     break;
  //   }
  //   if (arr[idx] === arr[idx + 1]) {
  //     return false;
  //   }
  //   if (isDecreased === null) {
  //     if (arr[idx] >= arr[idx + 1]) {
  //       return false;
  //     } else {
  //       isDecreased = false;
  //       if (isIncreased === null) {
  //         if (arr[idx] < arr[idx + 1]) {
  //           isIncreased = true;
  //         }
  //       }
  //     }
  //   }
  //   if (arr[idx] > arr[idx + 1]) {
  //     isDecreased = true;
  //   }
  //   if (isDecreased === true) {
  //     if (arr[idx] <= arr[idx + 1]) {
  //       return false;
  //     }
  //   }
  // }
  //
  // if (isDecreased !== true) {
  //   return false;
  // }
  // if (isIncreased !== true) {
  //   return false;
  // }
  //
  // return true;
  // 위는 내가 푼 로직

  if (arr.length < 3) return false;
  if (arr[1] <= arr[0]) return false;

  let ascending = true;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (ascending === true) {
      if (diff > 0) continue;
      ascending = false;
    }
    if (ascending === false) {
      if (diff < 0) continue;
      return false;
    }
  }
  return !ascending;
};

console.log(validMountainArray([6, 7, 7, 8, 6]));

validMountainArray([0, 3, 2, 1]);
