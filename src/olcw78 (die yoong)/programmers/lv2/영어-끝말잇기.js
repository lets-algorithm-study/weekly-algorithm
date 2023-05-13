// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const cache = [];

  for (let i = 0; i < Math.trunc(words.length / n); ++i) {
    for (let j = 0; j < n; ++j) {
      const stride = i * n + j;
      if (cache.includes(words[stride])) {
        return [ j + 1, i + 1 ];
      }

      const firstCh = words[stride].charAt(0);
      const lastWord = words[stride - 1];
      if (lastWord) {
        const lastCh = lastWord.charAt(lastWord.length - 1);
        if (lastCh && firstCh !== lastCh) {
          return [ j + 1, i + 1 ];
        }
      }

      cache.push(words[stride]);
    }
  }

  return [ 0, 0 ];
}