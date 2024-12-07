// 소괄호는 짝을 맞춘 열린 괄호 '(', 닫힌 괄호 ')'로 구성한다. 문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열을 줍니다
// 이대 소괄호가 정상으로 열고 닫혔는지 판별하는 solution 함수를 구현하세요.
// 만약 소괄호가 정상으로 열고 닫혔다면 true를 반환하고, 그렇지 않다면 false를 반환합니다.

// 제한사항
// 열린 괄호는 자신과 가장 가까운 닫힌 괄호를 만나면 상쇄됩니다.
// 상쇄 조건은 열린 괄호가 먼저와야 하고, 열린 괄호와 닫힌 괄호 사이에 아무것도 ㅓㅄ어져야 합니다.
// 더 상쇄할 괄호가 없을때까지 상쇄를 반복합니다.

function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
