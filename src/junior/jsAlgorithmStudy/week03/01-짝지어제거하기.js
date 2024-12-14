// 짝지어 제거하기를 성공적으로 수행 할 수 있는지 반환하는 함수를 완성하세요.

function solution(s) {
  const stack = [];

  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
