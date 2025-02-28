// https://school.programmers.co.kr/learn/courses/30/lessons/120921
function solution(A, B) {
  /** B를 두번 더한다음에 A가 몇번째에 있는지 찾으면 됨 발상의 전환이 필요한 문제
   * 예를들어 A: hello, B: ohell 이라면
   * ohellohell <- 여기서 hello 를 찾으면 됨
   */
  return (B + B).indexOf(A);

  // let answer = 0;
  //
  // const arrA = A.split('');
  //
  // for (let i = 0; i <= A.length - 1; ++i) {
  //   if (arrA.join('') === B) {
  //     return i;
  //   }
  //   arrA.unshift(arrA.pop());
  //   answer++;
  // }
  //
  // return answer ? -1 : answer;
}
