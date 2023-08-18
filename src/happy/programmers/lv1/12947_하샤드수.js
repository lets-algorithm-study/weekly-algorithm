/*
* [제목] 하샤드 수

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12947

* [문제] 

*/

function solution(x) {
  var answer = true;

  const tmp = x.toString().split('');
  let sum = 0;
  tmp.forEach(item => {
    sum += Number(item);
  });

  return x % sum === 0;
}
