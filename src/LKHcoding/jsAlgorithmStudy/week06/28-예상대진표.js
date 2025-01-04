// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let count = 0;
  while (true) {
    // n은 상관없고
    // a와 b의 거리가 줄어들어야 만날 수 있다
    // 계속 가까워지다가 0.5, 1이 되면 몇번 while문 돌았는지 체크하면 됨
    const nextA = Math.ceil(a / 2);
    const nextB = Math.ceil(b / 2);
    count++;

    if (nextA === nextB) {
      break;
    }

    a = nextA;
    b = nextB;
  }

  return count;
}

console.log(solution(8, 4, 7));
