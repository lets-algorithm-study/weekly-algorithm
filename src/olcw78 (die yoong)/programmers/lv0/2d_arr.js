// https://school.programmers.co.kr/learn/courses/30/lessons/120842
function solution(num_list, n) {
  const res = [];

  for (let i = 0; i < num_list.length / n; ++i) {
    res.push([]);
    for (let j = i * n; j < i * n + n; ++j) {
      res[i].push(num_list[j]);
    }
  }

  return res;
}