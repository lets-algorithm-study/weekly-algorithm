const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(S) {
  // 서로 다른 N개의 자연수의 합이 S다.
  // S를 알 때 자연수 N의 최대값은 얼마일까?
  // S를 만들기 위한 자연수 종류 최대값을 알아내려면
  // 1부터 N + next 까지 더했을때 S를 넘는지 체크하면 된다.
  // N까지 더했을때 S를 넘기 직전이라면 마지막에는 모자란만큼 자연수를 더해주면 S가 되니까
  // 그 시점에 N 개라는 걸 알 수 있다.
  // 문제는 종류가 많아야 하는거라 N를 올려가면서 합산하면된다.
  // 시간제한, S가 매우 커질 수 있다는 점을 유의해야한다.
  // 합산을 계속 누적해서 계산 수를 현저히 줄일 수 있다. (O 루트 N)
  // 가장 쉬운 선택부터 하나씩 값을 구해나가는거라 그리디 문제임.

  let N = 1;
  let sum = 0;

  while (sum + N <= S) {
    sum += N;
    ++N;
  }

  // while 문 빠져나온 시점은 이미 S를 넘어버린 상태이므로 N - 1이 정답
  console.log(N - 1);
}

/**
 * 혹은 아래처럼 가우스의 합 공식을 사용해도 된다.
 * 이거 초딩땐가 배웠던 기억이 난다...
 * 이걸 써먹을 날이 올줄이야...
 * 가우스의 합은 1부터 100까지 숫자 더할때
 * 1과 99, 2와 98...를
 * 1과 n, 2와 n-2...처럼 묶어서 각 쌍들은 모두 n+1이고
 * 총 쌍의 개수는 n/2개다. 따라서 총 합은 (n/2) * (n+1)이 된다.
 * 정리하면 (N * (N + 1)) / 2 와 같다.(이건 공책에 정리해보면 쉽게 유도 가능)
 * 그냥 가우스 합 공식 그대로 써도 무방함
 */

function solutionGause(S) {
  let N = 1;
  while ((N * (N + 1)) / 2 <= S) {
    N++;
  }
  return N - 1;
}
