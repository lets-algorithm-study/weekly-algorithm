// https://school.programmers.co.kr/learn/courses/30/lessons/120899
function solution(array) {
  const biggest = Math.max(array);
  const ofIndex = array.indexOf(biggest);
  return [biggest, ofIndex];
}