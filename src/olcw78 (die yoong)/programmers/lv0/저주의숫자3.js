/**
 * @param {number} testNum
 * @returns {boolean}
 */
function isMultiplierOf3(testNum) {
  return testNum % 3 === 0;
}

/**
 * @param {number} testNum
 * @returns {boolean}
 */
function has3WithinNumber(testNum) {
  return testNum.toString().includes('3');
}

const range = new Array(200)
  .fill()
  .map((_, i) => i + 1)
  .filter(n => !isMultiplierOf3(n) && !has3WithinNumber(n));

function solution(n) {
  return range[n - 1];
}

module.exports = solution;
