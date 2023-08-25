/*
* [제목] 숫자 문자열과 영단어
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/81301

* [문제] 
*/

const alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  alpha.forEach((item, i) => {
    const regex = new RegExp(`${item}`, 'g');
    s = s.replace(regex, i.toString());

    // const tmp = s.split(item);
    // s = tmp.join(i.toString());
  });
  return Number(s);
}
