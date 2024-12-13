function solution(n, k) {
  const arr = new Array(n).fill(0).map((_, idx) => idx + 1);

  let cursor = 0;

  while (arr.length !== 1) {
    const idx = (cursor + k - 1) % arr.length;
    arr.splice(idx, 1);
    cursor = idx;
  }

  return arr[0];
}

console.log(solution(5, 2));

// 답은 나왓지만 queue로 다시 풀어보자.
