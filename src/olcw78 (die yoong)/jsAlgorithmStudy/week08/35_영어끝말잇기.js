/**
 *
 * @param {number} n
 * @param {string[]} words
 * @returns {[number, number]}
 */
function solution(n, words) {
  const set = new Set();
  let i = 0;
  let cnt = 0;
  let lastWord = null;
  while (true) {
    if (i === n) {
      i = 0;
      cnt++;
    }

    const idx = cnt * n + i;
    if (idx >= words.length) break;
    const w = words[idx];
    if (lastWord !== null && lastWord.at(-1) !== w.at(0)) {
      return [i + 1, cnt + 1];
    }
    lastWord = w;
    if (set.has(w)) {
      return [i + 1, cnt + 1];
    } else {
      set.add(w);
    }
    i++;
  }
  return [0, 0];
}

const r1 = solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);
console.log(r1);

const r2 = solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure',
  'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']);
console.log(r2);

const r3 = solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
console.log(r3);


