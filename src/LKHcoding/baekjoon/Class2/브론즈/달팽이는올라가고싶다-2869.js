const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

solution(input.map(Number));

function solution(input) {
  const [up, down, goal] = input;

  const canGo = up - down;

  let answer = Math.ceil((goal - down) / canGo);

  console.log(answer);
}

/**
 * 제공되는 예제들이 1씩 올라가는 예제들 밖에 없어서
 * 착각을 유도한다.
 * answer를 구하는 방법을 헷갈려서 살짝 시간을 낭비함.
 */
