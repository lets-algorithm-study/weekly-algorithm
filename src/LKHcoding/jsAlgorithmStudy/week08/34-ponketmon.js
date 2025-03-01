// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function answer(nums) {
  const pickNum = nums.length / 2;

  const set = new Set(nums);

  // set.size 는 종류의 수,
  // pickNum 은 골라야 하는 수
  // 둘 중 작은 수를 구하면 됨
  return Math.min(set.size, pickNum);
}

console.log(answer([3, 1, 2, 3]));
console.log(answer([3, 3, 3, 2, 2, 4]));
console.log(answer([3, 3, 3, 2, 2, 2]));
