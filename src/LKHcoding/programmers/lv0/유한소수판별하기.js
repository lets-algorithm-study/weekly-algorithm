function solution(a, b) {
  const gcd = (aa, bb) => (aa % bb === 0 ? bb : gcd(bb, aa % bb));

  const commonGcd = gcd(a, b);

  let tmpB = b / commonGcd;

  const set = [];

  for (let i = 2; i * i <= tmpB; i++) {
    while (tmpB % i === 0) {
      set.push(i);
      tmpB /= i;
    }
  }

  if (tmpB > 1) {
    set.push(tmpB);
  }

  const isValid = set.every(n => n === 2 || n === 5);

  return isValid ? 1 : 2;
}
