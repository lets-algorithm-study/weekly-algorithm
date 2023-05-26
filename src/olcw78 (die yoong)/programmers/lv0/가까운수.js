// https://school.programmers.co.kr/learn/courses/30/lessons/120890#
function solution(array, n) {
  array.sort(($1, $2) => $1 - $2);

  let closest = 9999;
  let pos = 0;
  for (let i = 0; i < array.length; ++i) {
    const cur = Math.abs(array[i] - n);
    if (closest > cur) {
      closest = cur;
      pos = i;
    }
  }

  return array[pos];
}