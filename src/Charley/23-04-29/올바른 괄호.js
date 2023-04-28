// https://school.programmers.co.kr/learn/courses/30/lessons/12909

const solution = (n) => {
  let r = n.split("");
  let sum = 0;
  // 애초에 첫 괄호가 ) 여서 열기가 불가능, 양 쪽 괄호가 똑같은 경우, 마지막 괄호가 ( 여서 닫기가 불가능
  if (r[0] === ")" || r[0] === r[r.length - 1] || r[r.length - 1] === "(") {
    return false
  }
  // 짝지어서 닫혀야 한다는 뜻이 포함됨으로 sum은 0으로 나와야한다.
  // for (let i in r) => 시간 초과]
  // why? 
  for (let i = 0; i < r.length; i++) {
    if (r[i] === "(") {
      sum += 1;
    } else if (r[i] === ")") {
      sum -= 1;
    }
    // "()) 가 되는 순간 닫힌 상태이고 짝은 아니므로 더 이상은 for문은 의미가없음"
    if (sum < 0) {
      return false
    }
  }
  return sum === 0 ? true : false
};

console.log(solution("()()"))