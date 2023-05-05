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
      const lastCh = words[stride - 1]?.charAt(words[stride - 1]?.length - 1);
      if (lastCh && firstCh !== lastCh) {
        return [ j + 1, i + 1 ];
      }

      cache.push(words[stride]);
    }
  }

  return [ 0, 0 ];
}

const res = solution(3, [ "tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank" ]);
console.log(res);

const a2 = solution(5, [ "hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive" ]);
console.log(a2);

const a3 = solution(2, [ "hello", "one", "even", "never", "now", "world", "draw" ]);
console.log(a3);