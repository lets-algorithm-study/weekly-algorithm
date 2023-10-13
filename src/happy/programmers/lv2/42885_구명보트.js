/*
* [제목] 구명보트

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/42885

* [문제] 

*/

function solution(people, limit) {
  var answer = 0;

  const sortedPeople = people.sort((a, b) => b - a);

  for (let i = 0, k = sortedPeople.length - 1; i <= k; i++) {
    if (sortedPeople[i] + sortedPeople[k] <= limit) {
      k--;
    }
    answer += 1;
  }

  return answer;
}
