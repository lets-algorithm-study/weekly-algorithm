const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const data = input.map(item => item.split(' ').map(Number));

solution(N, data);

function solution(N, data) {
  let whiteCnt = 0;
  let blueCnt = 0;

  function divide(x, y, size) {
    if (checkSameColor(x, y, size)) {
      //   모드 같은 색인 경우
      const color = data[x][y];
      if (color === 0) {
        whiteCnt++;
      } else {
        blueCnt++;
      }
      return;
    }

    const newSize = size / 2;

    divide(x, y, newSize);
    divide(x + newSize, y, newSize);
    divide(x, y + newSize, newSize);
    divide(x + newSize, y + newSize, newSize);
  }

  function checkSameColor(x, y, size) {
    const color = data[x][y];
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (data[i][j] !== color) return false;
      }
    }

    return true;
  }

  divide(0, 0, N);

  console.log(whiteCnt);
  console.log(blueCnt);
}
