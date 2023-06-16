https://school.programmers.co.kr/learn/courses/30/lessons/12982

const solution = (d, budget) => {
  var answer = 0;

  d.sort((a, b) => a - b);
  for (const department of d) {
    if (department > budget) break;
    answer += 1;
    budget -= department;
  }
  return answer;
}