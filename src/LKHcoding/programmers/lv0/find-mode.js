// https://school.programmers.co.kr/learn/courses/30/lessons/120812
function solution(array) {
  const obj = {};

  array.forEach(item => {
    obj[item] = (obj[item] ?? 0) + 1;
  });

  const result = Object.values(obj).sort((a, b) => a - b);

  if (array.length === 1) {
    return array[0];
  }

  if (result[result.length - 1] === result[result.length - 2]) {
    return -1;
  }

  const revertObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    revertObj[value] = key;
  });

  return +revertObj[result[result.length - 1]];
}
