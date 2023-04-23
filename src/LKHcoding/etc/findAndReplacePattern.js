// https://leetcode.com/problems/find-and-replace-pattern/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let result = [];

  words.forEach((item) => {
    let mapper = new Map();
    let values = new Set();
    for (let idx = 0; idx < item.length; idx++) {
      if (!pattern[idx]) break;

      if (mapper.has(item[idx])) {
        if (mapper.get(item[idx]) !== pattern[idx]) {
          break;
        }
      } else {
        if (values.has(pattern[idx])) {
          break;
        }
        mapper.set(item[idx], pattern[idx]);
        values.add(pattern[idx]);
      }
      if (item.length - 1 === idx) {
        result.push(item);
      }
    }
  });
  return result;
};

findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb");
