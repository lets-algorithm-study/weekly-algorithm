const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let first = +input[0];
let rest = input.filter((_, idx) => idx !== 0).map(item => item.split('').map(Number));

solution(first, rest);

function solution(N, data) {
  const quadTree = [];

  function recursion(n, x, y) {
    let total = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += data[y + i][x + j];
      }
    }

    if (total === 0) {
      quadTree.push(0);
    } else if (total === n * n) {
      quadTree.push(1);
    } else {
      n /= 2;
      quadTree.push('(');

      // 좌상단
      recursion(n, x, y);

      // 우상단
      recursion(n, x + n, y);

      // 좌하단
      recursion(n, x, y + n);

      // 우하단
      recursion(n, x + n, y + n);

      quadTree.push(')');
    }
  }

  recursion(N, 0, 0);

  console.log(quadTree.join(''));
}
