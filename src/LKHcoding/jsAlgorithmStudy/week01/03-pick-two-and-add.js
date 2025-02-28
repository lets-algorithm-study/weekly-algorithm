function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    const item = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const nextItem = numbers[j];
      set.add(item + nextItem);
    }
  }

  return [...set].toSorted((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
