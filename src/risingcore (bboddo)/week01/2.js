const input1 = [4, 2, 2, 1, 3, 4];

const input2 = [2, 1, 1, 3, 2, 5, 4];

const soulution = arr => {
  return [...new Set(arr)].sort((a, b) => b - a);
};

console.log(soulution(input1));
console.log(soulution(input2));
