// 문제 - https://programmers.co.kr/learn/courses/30/lessons/42840
// 정답 - https://github.com/kciter/coding-interview-js/blob/main/solution/04.js

function solution(answers) {
  const scores = [0, 0, 0];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const highestScore = Math.max(...scores);

  return scores
    .map((score, idx) => ({ score, idx }))
    .filter(item => item.score === highestScore)
    .map(item => item.idx + 1)
    .toSorted((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
