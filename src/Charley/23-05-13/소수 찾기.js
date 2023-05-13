https://school.programmers.co.kr/learn/courses/30/lessons/12921

// array fill로 숫자를 채우고 소수가 아닌 친구를 거르는 작업
// 2의 배수 , 3을 제외한 나머지 3의 배수,
function solution(n) {
  let arr = Array(n + 1)
    .fill()
    .map((_, i) => i);

  for (let i = 2; i <= n; i++) {
    // 이미 걸러진 수
    if (arr[i] === 0) continue;

    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  // 거르지 못한 나머지 수만 배열로 리턴
  return arr.filter((v) => v !== 0).length - 1;
}