/*
* [제목] 완주하지 못한 선수


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/42576

* [문제] 

*/

function solution(participant, completion) {
  var answer = '';

  let participantObj = {};

  participant.forEach(item => {
    if (participantObj[item]) participantObj[item] += 1;
    else participantObj[item] = 1;
  });

  completion.forEach(item => {
    if (participantObj[item] > 1) participantObj[item] -= 1;
    else if (participantObj[item] === 1) delete participantObj[item];
  });

  return Object.keys(participantObj)[0];
}

/* 다른 풀이 */

3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
