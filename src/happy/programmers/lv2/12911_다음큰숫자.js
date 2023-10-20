/*
* [제목] 12911_다음큰숫자

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12911

* [문제] 

*/

const getNumberOneCount = num => {
  const tmp = num.toString(2);
  return tmp.split('').reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0);
};

function solution(n) {
  var answer = n;

  const nOneCount = getNumberOneCount(n);

  while (answer) {
    answer += 1;
    if (nOneCount === getNumberOneCount(answer)) break;
  }
  return answer;
}
