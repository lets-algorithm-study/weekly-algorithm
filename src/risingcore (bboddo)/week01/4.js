const patterns = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

input1 = [1, 2, 3, 4, 5]; // 1
input2 = [1, 3, 2, 4, 2]; // 1,2,3

const solution = answer => {
  const [p1, p2, p3] = patterns;
  const result = [];
  result.push(p1.filter((_, i) => answer[i] === p1[i]).length || 0);
  result.push(p2.filter((_, i) => answer[i] === p2[i]).length || 0);
  result.push(p3.filter((_, i) => answer[i] === p3[i]).length || 0);

  return [1, 2, 3].filter((_, i) => result[i] === Math.max(...result));
};

console.log(solution(input1));
console.log(solution(input2));
