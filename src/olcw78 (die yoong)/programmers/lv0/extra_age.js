const jumpTable = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j'
};

function solution(age) {
  const len = String(age).length;
  const res = [];
  for (let i = len - 1; i >= 0; --i) {
    const digit = Math.pow(10, i);
    const divided = Math.floor(age / digit);
    res.push(jumpTable[divided]);
    age -= divided * digit;
  }

  return res.join('');
}

// 10 나누기로 다 쳐낼 필요없음.. 과해따...

// other ppl
function sol(age) {
  return String(age)
    .split('')
    .map((ch) => jumpTable[ch])
    .join('');
}
