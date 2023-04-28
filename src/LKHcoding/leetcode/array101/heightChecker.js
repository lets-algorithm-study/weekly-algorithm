/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sortedHeights = [...heights].sort((a, b) => a - b);

  let count = 0;
  sortedHeights.forEach((item, idx) => {
    if (heights[idx] !== item) {
      count++;
    }
  });

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
