/*
* [제목] 3진법 뒤집기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/68935

* [문제] 
*/

function solution(n) {
  const n3 = n.toString(3);
  const reverse3 = n3.split('').reverse().join('');

  return parseInt(reverse3, 3);
}
