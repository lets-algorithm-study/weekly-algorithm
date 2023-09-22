/*
* [제목] 대충 만든 자판

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/160586#

* [문제] 

*/
function solution(keymap, targets) {
  var answer = [];

  let obj = {};

  // 각 키의 누른 최소값을 객체로 만듬
  keymap.forEach(item => {
    const tmp = item.split('');

    tmp.forEach((_item, i) => {
      if (obj[_item]) {
        if (obj[_item] > i + 1) {
          obj[_item] = i + 1;
        }
      } else {
        obj[_item] = i + 1;
      }
    });
  });

  // targets의 누른 키들을 더함, keymap에 없는 키면 -1 반환
  targets.forEach((item, i) => {
    const tmp = item.split('');
    answer[i] = 0;

    tmp.some(_item => {
      if (obj[_item]) {
        answer[i] += obj[_item];
      } else {
        answer[i] = -1;
        return true;
      }
    });
  });
  return answer;
}
