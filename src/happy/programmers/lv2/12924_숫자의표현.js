/*
* [제목] 숫자의 표현


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12924

* [문제] 

*/

function solution(n) {
  var answer = 0;

  // 뒤에서부터
  for (let i = n; i > 0; i--) {
    let sum = 0;

    for (let k = i; k > 0; k--) {
      sum += k;

      // 합계가 같으면 연속된 수
      if (n === sum) {
        answer += 1;
        break;
      }
      // 합계가 크면 연속되지 않는 수
      else if (n < sum) break;
    }
  }
  return answer;
}
