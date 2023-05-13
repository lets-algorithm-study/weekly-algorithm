// https://school.programmers.co.kr/learn/courses/30/lessons/120861
let pos = [0, 0];

const controller = {
  up: ([x, y]) => [x, y + 1],
  down: ([x, y]) => [x, y - 1],
  left: ([x, y]) => [x - 1, y],
  right: ([x, y]) => [x + 1, y]
};

function clamp(n, from, to) {
  return Math.min(Math.max(n, to), from);
}

function solution(keyinput, board) {
  const max = [
    Math.trunc(board[0] / 2),
    Math.trunc(board[1] / 2)
  ];

  keyinput.forEach((input) => {
    const newPos = controller[input](pos);
    pos = [
      clamp(newPos[0], max[0], -max[0]),
      clamp(newPos[1], max[1], -max[1]),
    ];
  });

  return pos;
}