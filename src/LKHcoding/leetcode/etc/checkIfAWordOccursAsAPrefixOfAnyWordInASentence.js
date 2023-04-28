// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  const words = sentence.split(" ");

  let preFixedIdx = [];

  for (let idx = 0; idx < words.length; idx++) {
    if (words[idx].startsWith(searchWord)) {
      preFixedIdx.push(idx + 1);
      if (preFixedIdx.length >= 2) {
        return preFixedIdx[0];
      }
    }
  }
  return preFixedIdx.length === 0 ? -1 : preFixedIdx[0];
};

isPrefixOfWord("love dumb leetcode love", "lov");
