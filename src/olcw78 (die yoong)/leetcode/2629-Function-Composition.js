// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  const len = functions.length;
  return function (x) {
    for (let i = len - 1; i > -1; --i) {
      x = functions[i](x);
    }

    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
