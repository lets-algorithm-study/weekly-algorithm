function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  let win1 = 0;
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let win2 = 0;
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let win3 = 0;

  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i % 5]) {
      win1 += 1;
    }
    if (answers[i] === arr2[i % 8]) {
      win2 += 1;
    }
    if (answers[i] === arr3[i % 10]) {
      win3 += 1;
    }
  }

  const maxWinScore = Math.max(win1, win2, win3);

  if (maxWinScore === win1) answer.push(1);
  if (maxWinScore === win2) answer.push(2);
  if (maxWinScore === win3) answer.push(3);

  return answer;
}

// 배열의 entries() 메서드를 사용하여 풀이
