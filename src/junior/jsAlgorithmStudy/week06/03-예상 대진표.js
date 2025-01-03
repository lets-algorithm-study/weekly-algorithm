// n 참가자 수, a 참가자 A의 번호, b 참가자 B의 번호.
// A, B가 만나는 지점을 찾는 문제.

const solution = (n, a, b) => {
  // 대결까지 걸린 라운드 수를 저장. 초기화 값 0;
  let answer = 0;

  // a !== b인 동안 반복.
  // 즉, 두 참가자가 같은 번호를 갖게 되면 종료됩니다.

  while (a !== b) {
    a = Math.ceil(a / 2); // 참가자 a의 번호를 다음 라운드의 번호로 갱신.
    b = Math.ceil(b / 2); // 참가자 b의 번호를 다음 라운드의 번호로 갱신.
    answer += 1;
  }

  // 반복이 될때마다 라운드 수 + 1 증가
  return answer;
};

console.log(solution(8, 4, 7));
// 3
