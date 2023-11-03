/*
* [제목] 귤고르기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/138476

* [문제] 

*/

function solution(k, tangerine) {
  let answer = 0;

  const dict = {};
  tangerine.forEach(t => (dict[t] = (dict[t] || 0) + 1));

  const arr = Object.values(dict).sort((a, b) => b - a);

  for (const t of arr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
