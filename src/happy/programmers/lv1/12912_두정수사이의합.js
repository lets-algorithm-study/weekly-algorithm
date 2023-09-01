/*
* [제목] 두 정수 사이의 합

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12912

* [문제] 
*/

function solution(a, b) {
  var answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}
