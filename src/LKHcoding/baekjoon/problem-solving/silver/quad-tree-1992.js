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

/**
 * 솔직히 문제 자체가 설명이 부족하다고 느껴짐
 * 구글 검색으로 문제 설명만 따로 찾아보니 좌표를 통째로 4분할 하는 재귀문제였음
 * 문제를 이해했어도 재귀를 많이 써본적이 없어서 풀 수 있었을지 모르겠지만
 * 풀이를 한번 보고 명확하게 이해한 후 백지상태로 다시 풀어보았음.
 * 다음번에 이 문제를 복기할때는 바로 풀 수 있어야 할 듯. (이해는 명확히 되었으므로)
 * 하지만 재귀 헷갈림....
 */
