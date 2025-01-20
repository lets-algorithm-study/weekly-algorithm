input1 = {
  arr1: [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  arr2: [
    [3, 3],
    [3, 3],
  ],
}; // [[15,15],[15,15],[15,15]]

input2 = {
  arr1: [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  arr2: [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ],
}; // [[22,22,11],[36,28,18],[29,20,14]]

const solution = input => {
  const { arr1, arr2 } = input;
  const result = [];

  // arr1의 각 행에 대해 순회
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    // arr2의 각 열에 대해 순회
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      // 현재 행과 열의 각 요소를 곱하고 더함
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
};

console.log(solution(input1));
console.log(solution(input2));
