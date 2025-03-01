function solution(pairs) {
  const stack = [];

  for (const char of pairs) {
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution('(())()'));
