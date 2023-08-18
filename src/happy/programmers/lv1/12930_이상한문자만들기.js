/*
* [제목] 이상한 문자 만들기


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12930

* [문제] 

*/

function solution(s) {
  var answer = '';

  const tmp = s.split(' ');

  tmp.forEach((item, i) => {
    item.split('').forEach((_item, i) => {
      if (i % 2 === 0) answer += _item.toUpperCase();
      else answer += _item.toLowerCase();
    });
    if (i !== tmp.length - 1) answer += ' ';
  });
  return answer;
}
