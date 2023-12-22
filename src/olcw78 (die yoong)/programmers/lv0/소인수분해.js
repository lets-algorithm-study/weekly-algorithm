// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function isPrimeNumber(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  if (isPrimeNumber(n)) return [n];

  const answer = new Set();
  let next = 2;
  while (n > 0 && !isPrimeNumber(n)) {
    if (!isPrimeNumber(next)) {
      ++next;
      continue;
    }

    if (n % next !== 0) {
      ++next;
      continue;
    }

    const div = n / next;
    n = Math.trunc(div);

    answer.add(next);
  }

  answer.add(n);

  return Array.from(answer);
}

const a1 = solution(420);
console.log(a1);
