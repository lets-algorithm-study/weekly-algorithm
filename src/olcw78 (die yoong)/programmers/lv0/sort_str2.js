// https://school.programmers.co.kr/learn/courses/30/lessons/120911
function solution(my_string) {
  return my_string
    .split('')
    .map((ch) => ch.toLowerCase())
    .sort()
    .join('');
}