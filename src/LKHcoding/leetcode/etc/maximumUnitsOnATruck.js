// https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let sortedBoxType = boxTypes.sort((a, b) => b[1] - a[1]);

  let maximumBoxCount = 0;
  let sum = 0;

  for (let item of sortedBoxType) {
    let haveToReturn = false;
    for (let idx = 0; idx < item[0]; idx++) {
      maximumBoxCount++;
      if (truckSize < maximumBoxCount) {
        haveToReturn = true;
        break;
      }
      sum += item[1];
    }
    if (haveToReturn) {
      return sum;
    }
  }

  return sum;
};

maximumUnits(
  [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  4
);
