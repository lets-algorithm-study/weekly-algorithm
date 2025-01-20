input1 = [2, 1, 3, 4, 1];
input2 = [5, 0, 2, 7];

const solution = arr => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      result.push(arr[i] + arr[j]);
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
};

console.log(solution(input1));
console.log(solution(input2));
