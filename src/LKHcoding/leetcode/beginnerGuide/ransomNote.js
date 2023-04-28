// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let count = 0;
  let tmpStr = ransomNote.split("");

  tmpStr.map((item) => {
    if (magazine.includes(item)) {
      count++;
      magazine = magazine.replace(item, "");
    }
  });
  return tmpStr.length === count;
  Î;
};

canConstruct("aa", "ab");
