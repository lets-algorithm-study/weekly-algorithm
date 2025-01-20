const input1 = [1, -5, 2, 4, 3];
const input2 = [2, 1, 1, 3, 2, 5, 4];
const input3 = [6, 1, 7];

const solution = arr => {
  return arr.sort((a, b) => a - b);
};

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
