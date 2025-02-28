// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
    const aroundArea = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1],
    ];
    let safeZoneCnt = 0;

    board.forEach((row, y) => {
        row.forEach((item, x) => {
            if (item === 1) {
                return;
            }
            if (!aroundArea.some(([oy, ox]) => !!board[y + oy]?.[x + ox])) {
                ++safeZoneCnt;
            }
        });
    });
    return safeZoneCnt;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
