// https://school.programmers.co.kr/learn/courses/30/lessons/120887
function solution(i, j, k) {
  k = k.toString();
  let match = 0;
  for (i; i <= j; ++i) {
    const word = i.toString();
    for (let j = 0; j < word.length; ++j) {
      if (word.charAt(j) === k) {
        ++match;
      }
    }
  }
  return match;
}