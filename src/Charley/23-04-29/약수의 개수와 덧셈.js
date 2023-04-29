https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let p = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) p++
    }
    (p % 2 === 0) ? answer += i : answer -= i
    // 제곱근이 정수면 약수의 개수는 홀수이다
    //(Number.isInteger(Math.sqrt(i))) ? answer -= i : answer += i;
  }
  return answer
}

console.log(solution(13, 17))