function solution(s) {
  const n = s.length;

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];

    let isCorrect = true;

    for (let j = 0; j < n; j++) {
      // 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];

      if (c === '[' || c === '(' || c === '{') {
        // 열린 괄호는 푸시
        stack.push(c);
      } else {
        if (stack.length === 0) {
          // 여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }

        // 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];
        if (c === ']' && top === '[') {
          stack.pop();
        } else if (c === ')' && top === '(') {
          stack.pop();
        } else if (c === '}' && top === '{') {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }

    // 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }

  return answer;
}

// console.log(solution('[](){}'));

console.log(answer('[](){}'));
console.log(answer('}]()[{'));
console.log(answer('[)(]'));
console.log(answer('}}}'));

function answer(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < n; j++) {
      const char = s[(i + j) % n];

      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
        continue;
      }

      const top = stack[stack.length - 1];
      if (char === ')' && top === '(') {
        stack.pop();
        continue;
      }
      if (char === ']' && top === '[') {
        stack.pop();
        continue;
      }
      if (char === '}' && top === '{') {
        stack.pop();
        continue;
      }

      isCorrect = false;
      break;
    }

    if (stack.length === 0 && isCorrect) {
      answer++;
    }
  }

  return answer;
}
