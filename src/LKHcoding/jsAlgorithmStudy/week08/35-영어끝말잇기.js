// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function answer(n, words) {
  const cache = {};

  let failedUserIdx = 0;
  let failedCycleIdx = 0;

  for (const [idx, word] of words.entries()) {
    // 처음 얘기할때는 탈락이 없다.
    if (idx !== 0) {
      const prevWord = words[idx - 1];

      const prevLastChar = prevWord[prevWord.length - 1];
      const currentFrontChar = word[0];

      // 끝말잇기 제대로 했는지 체크
      if (prevLastChar !== currentFrontChar) {
        // 탈락처리
        failedUserIdx = (idx % n) + 1;
        failedCycleIdx = Math.ceil((idx + 1) / n);
        break;
      }
    }

    if (!cache[word]) {
      // 단어 중복 사용 체크
      cache[word] = true;
      continue;
    }

    // 단어 중복 사용하면 탈락 처리
    failedUserIdx = (idx % n) + 1;
    failedCycleIdx = Math.ceil((idx + 1) / n);
    break;
  }

  return [failedUserIdx, failedCycleIdx];
}

console.log(
  answer(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ])
);

console.log(answer(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
