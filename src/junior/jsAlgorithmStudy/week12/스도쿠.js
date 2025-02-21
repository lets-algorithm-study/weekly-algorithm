// 스도쿠

// 1. 해당 행에 넣으려는 숫자 num이 있는지 확인
// 2. 해당 열에 넣으려는 숫자 num이 있는지 확인
// 3. 3x3 그룹에 넣으려는 숫자 num이 있는지 확인
// 3.1 현재 행(row)이 속한 박스의 시작 행 인덱스를 구합니다. (startRow)
// 3.2 현재 열(col)이 속한 박스의 시작 열 인덱스를 구합니다. (startCol)
// 3.3 startRow부터 startRow + 3까지 반복합니다.
// 3.4 startCol부터 startCol + 3까지 반복합니다.
// 3.5 해당 위치의 숫자가 num과 같다면 true를 반환합니다.
// 3.6 모든 반복을 마치면 false를 반환합니다.
// 4. 빈칸의 위치를 찾는 함수를 만든다.
// 4.1 9x9 행과 열 배열을 반복하면서 0인 위치를 찾아 반환한다.

function solution(board) {
  const invaild = (num, row, col) => {
    return isInRow(num, row) || isInCol(num, col) || isInGroup(num, row, col);
  };

  const isInRow = (num, row) => {
    return board[row].includes(num);
  };

  const isInCol = (num, col) => {
    return board.some(row => row[col] === num);
  };

  const isInGroup = (num, row, col) => {
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) return true;
      }
    }
    return false;
  };

  const isEmpty = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return [i, j];
      }
    }
    return null;
  };

  const result = () => {
    const emptyCell = isEmpty();
    if (emptyCell === null) return true;

    const [row, col] = emptyCell;
    0, 3;

    for (let num = 1; num <= 9; num++) {
      if (!invaild(num, row, col)) {
        board[row][col] = num;

        if (result()) return true;
        board[row][col] = 0;
      }
    }
    return false;
  };

  result();
  return board;
}

console.log(
  solution([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);
