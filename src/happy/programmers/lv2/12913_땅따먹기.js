/*
* [제목] 땅따먹기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12913

* [문제] 

*/

function solution(land) {
  var answer = 0;

  let prevIndex = -1;
  land.forEach(item => {
    let max = 0;
    let maxIndex = -1;

    item.forEach((_item, i) => {
      if (_item > max && prevIndex !== i) {
        max = _item;
        maxIndex = i;
      }
    });

    prevIndex = maxIndex;
    answer += max;
  });

  return answer;
}
