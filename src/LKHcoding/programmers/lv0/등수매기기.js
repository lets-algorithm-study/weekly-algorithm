// https://school.programmers.co.kr/learn/courses/30/lessons/120882
function solution(score) {
  const averageList = score.map(item => (item[0] + item[1]) / 2);
  const sortedAverageList = [...averageList].sort((a, b) => b - a);

  return averageList.map(item => sortedAverageList.indexOf(item) + 1);
}
