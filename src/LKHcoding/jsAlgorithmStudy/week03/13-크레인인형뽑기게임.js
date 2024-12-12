// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;

  const stack = [];

  for (const move of moves) {
    const topDollIdx = board.findIndex(item => item[move - 1] !== 0);

    if (topDollIdx > -1) {
      // 인형 있으면
      const doll = board[topDollIdx][move - 1];
      const top = stack[stack.length - 1];

      if (top === doll) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(doll);
      }

      board[topDollIdx][move - 1] = 0;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
