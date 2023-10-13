/*
* [제목] 최댓값과 최솟값

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12939

* [문제] 

*/

function solution(s) {
  const tmp = s.split(' ');

  let max = -Infinity;
  let min = Infinity;

  tmp.forEach(_item => {
    const item = Number(_item);
    if (item > max) max = item;
    if (item < min) min = item;
  });

  return `${min} ${max}`;
}
