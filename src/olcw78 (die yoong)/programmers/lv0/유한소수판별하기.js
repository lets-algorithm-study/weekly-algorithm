/** @type {(a: number, b: number) => boolean} */
const giyak = (a, b) => {
  const d = gcd(a, b);
  return a / d === a && b / d === b;
};

/** @type {(a: number, b: number) => number} */
const gcd = (a, b) => {
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  while (b != 0) {
    const n = a % b;
    a = b;
    b = n;
  }

  return a;
};

// 소인수분해
/** @type {(n: number) => number} */
const factorize = n => {
  let d = 2;
  while (n != 1) {
    if (n % d == 0) {
      n = Math.round(n / d);
    } else {
      d += 1;
    }
  }

  return n;
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {1 | 2}
 */
function solution(a, b) {
  while (!giyak(a, b)) {
    const dividend = gcd(a, b);
    console.log(dividend);

    a = Math.round(a / dividend);
    b = Math.round(b / dividend);
    console.log(a, b);
  }

  const com = gcd(a, b);
  return com === 1 || com % 2 === 0 || com % 5 === 0 ? 1 : 2;
}

module.exports = {
  giyak,
  gcd,
  factorize,
  solution,
};
