// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // const arrLength = arr.length;
  //
  // for (let i = 0; i < arrLength; i++) {
  //   if (arr[i] === 0) {
  //     arr.splice(i, 0, 0);
  //     arr.pop();
  //     i++;
  //   }
  // }
  const tmpArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let originalItem = arr[idx];
    if (originalItem === 0) {
      tmpArr.push(0);
      tmpArr.push(0);
    } else {
      tmpArr.push(originalItem);
    }
    arr[idx] = tmpArr[idx];
  }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
