/*
* [제목] 12948_핸드폰번호가리기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12948

* [문제] 

*/

function solution(phone_number) {
  var answer = '';
  let arr = phone_number.split('');

  arr.forEach((item, i) => {
    if (i < arr.length - 4) answer += '*';
    else answer += item;
  });
  return answer;
}
