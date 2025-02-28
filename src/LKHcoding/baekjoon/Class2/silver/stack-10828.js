const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

solution(input);

function solution(input) {
  const stack = [];

  const answer = [];

  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if (item.startsWith('push')) {
      const [order, value] = item.split(' ');
      stack.push(value);
      continue;
    }

    if (item.startsWith('pop')) {
      const poped = stack.pop();
      if (poped === undefined) {
        answer.push(-1);
        continue;
      }
      answer.push(poped);
      continue;
    }

    if (item.startsWith('top')) {
      if (stack.length === 0) {
        answer.push(-1);
        continue;
      }
      answer.push(stack[stack.length - 1]);
      continue;
    }

    if (item.startsWith('size')) {
      answer.push(stack.length);
      continue;
    }

    if (item.startsWith('empty')) {
      answer.push(stack.length === 0 ? 1 : 0);
      continue;
    }
  }

  console.log(answer.join('\n'));
}
