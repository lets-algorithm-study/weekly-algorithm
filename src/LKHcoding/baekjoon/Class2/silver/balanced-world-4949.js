const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();

solution(input);

function solution(input) {
  const answers = [];

  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    let answer = 'yes';
    const queue = [];

    const chars = item.split('');

    for (let j = 0; j < chars.length; j++) {
      const char = chars[j];
      if (!is괄호(char)) {
        continue;
      }

      if (queue.length === 0) {
        if (!isOpen(char)) {
          answer = 'no';
          break;
        }
        queue.push(char);
        continue;
      }

      if (isOpen(char)) {
        queue.push(char);
      } else {
        const poped = queue.pop();
        // 닫기라면 같은 종류여야 한다.
        if (!isSameKindBracket(poped, char)) {
          answer = 'no';
          break;
        }
      }
    }

    if (queue.length > 0) {
      answer = 'no';
    }
    answers.push(answer);
  }

  console.log(answers.join('\n'));
}

function is괄호(char) {
  return char === '(' || char === '[' || char === ')' || char === ']';
}

function isOpen(char) {
  return char === '(' || char === '[';
}

function isSameKindBracket(str1, str2) {
  if (str1 === '(') {
    if (str2 === ')') {
      return true;
    }
  }

  if (str1 === '[') {
    if (str2 === ']') {
      return true;
    }
  }

  return false;
}
