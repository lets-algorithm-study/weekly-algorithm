// https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution(emergency) {
  const tmp = [ ...emergency ];
  tmp.sort(($1, $2) => $2 - $1);

  return emergency.map((e) => tmp.indexOf(e) + 1);
}