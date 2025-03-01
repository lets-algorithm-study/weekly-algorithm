const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(N) {
  // 1, 7, 19, 37, 61 -> 6의 배수만큼 점점 커짐

  let sum = 1;
  let count = 1;
  for (; sum < N; count++) {
    sum += 6 * count;
  }
  console.log(count);
}

/**
 * 문제가 벌집인걸 보고 난해한 느낌이 들었다.
 * 일단 예제를 보고 규칙성을 찾아냈다. 한바퀴 감싸고 depth가 늘어날때
 * 6의 배수만큼 숫자가 증가했다. (6 * 1, 6 * 2... 씩 증가)
 * 이것만 가지고 문제를 풀어냈다.
 * 좀 더 이해해보자면 육각형을 감싸나가는 방식이니까 당연히
 * 6만큼 늘어나는거고, 한바퀴 감싸면 그만큼 배로 증가하는거였다.
 * 문제만 읽고 이 패턴을 알아채지는 못했지만
 * 예시를 보고 알아내서 다행
 */
