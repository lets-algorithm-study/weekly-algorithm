// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  // stack을 쓸 수 있다는 생각 자체를 떠올릴 수 있어야 풀 수 있다.
  // stack을 활용해서 어떻게 시간복잡도가 낮게 풀어낼 수 있는지 떠올릴 수 있어야 한다.
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];

    if (stack.length !== 0 && char === top) {
      stack.pop();
      continue;
    }

    stack.push(char);
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
