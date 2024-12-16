// 1. 스택 초기화
// 2. 문자열을 한 글자씩 순회
// 3. 여는 괄호인 경우 스택에 추가
// 4. 닫는 괄호인 경우 스택이 비어 있으면 잘못된 괄호 문자열
// 5. 여는 괄호를 스택에서 제거
// 6. 스택이 비어있으면 올바른 괄호 문자열

function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution('(()())'));
