const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(n) {
  let answer = '';
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      answer += makeStar(i, j, n);
    }
    answer += '\n';
  }

  console.log(answer);
}

function makeStar(x, y, num) {
  // 'i % 3 === 1 && j % 3 === 1' 조건은 주어진 좌표가 별 모양의 '중앙'에 위치해야 할지를 확인합니다.
  // 3x3의 별 패턴에서 중앙에 위치한 하나의 칸은 공백이 되어야 하기 때문입니다.
  // 이런 패턴은 더 큰 사이즈의 별에서도 계속해서 유지됩니다. 즉, 크기가 커질수록 더 많은 공백이 있는 구역이 생깁니다.
  // 따라서 i와 j가 모두 3으로 나누어 떨어질 경우, 해당 좌표는 공백이 되어야 하는 중앙 위치에 있다고 판단하고 공백을 반환합니다.
  if (x % 3 === 1 && y % 3 === 1) {
    return ' ';
  }
  if (num !== 1) {
    // 만약 num 이 1보다 크다면, 별의 크기를 줄이기 위해 num 을 3으로 나눕니다.
    // 이 과정에서 별 모양은 더 작은 3x3 크기의 별로 나뉘게 됩니다.
    // 이런 식으로 재귀 호출을 계속하면, 별 모양을 그리는 작업은 점점 더 작은 별로 나뉘게 되어 복잡한 패턴을 만들게 됩니다.
    // 이때 i와 j를 각각 3으로 나눈 몫을 재귀 호출에 전달함으로써, 좌표를 현재 별의 크기에 맞게 조정하게 됩니다.
    return makeStar(Math.trunc(x / 3), Math.trunc(y / 3), num / 3);
  }

  // num 이 1이라는 것은 별 모양의 가장 작은 단위, 즉 3x3 크기의 별에서 가장 작은 1x1 크기의 별을 그리는 경우를 의미합니다.
  // 이 경우 별(*)을 그립니다.
  return '*';
}
