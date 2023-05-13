// https://school.programmers.co.kr/learn/courses/30/lessons/120861#
function solution(keyinput, board) {
  const answer = [0, 0];

  const maxX = Math.trunc(Math.abs(board[0] / 2));
  const maxY = Math.trunc(Math.abs(board[1] / 2));

  keyinput.forEach(item => {
    if (item === 'left') {
      if (maxX > Math.abs(answer[0]) || answer[0] >= 0) {
        answer[0] -= 1;
      }
    }
    if (item === 'right') {
      if (maxX > Math.abs(answer[0]) || answer[0] <= 0) {
        answer[0] += 1;
      }
    }
    if (item === 'up') {
      if (maxY > Math.abs(answer[1]) || answer[1] <= 0) {
        answer[1] += 1;
      }
    }
    if (item === 'down') {
      if (maxY > Math.abs(answer[1]) || answer[1] >= 0) {
        answer[1] -= 1;
      }
    }
  });

  return answer;
}
