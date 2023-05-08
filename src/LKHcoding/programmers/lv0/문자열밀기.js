// https://school.programmers.co.kr/learn/courses/30/lessons/120921
function solution(A, B) {
  let answer = 0;

  const arrA = A.split('');

  for (let i = 0; i <= A.length - 1; ++i) {
    if (arrA.join('') === B) {
      return i;
    }
    arrA.unshift(arrA.pop());
    answer++;
  }

  return answer ? -1 : answer;
}
