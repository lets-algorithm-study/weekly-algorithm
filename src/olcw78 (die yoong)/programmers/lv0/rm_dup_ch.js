// https://school.programmers.co.kr/learn/courses/30/lessons/120888
function solution(my_string) {
  const unq = new Set([...my_string]);
  let res = "";
  for (const ch of unq) {
    res += ch;
  }

  return res;
}