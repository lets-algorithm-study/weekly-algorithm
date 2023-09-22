const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

solution(input);

function solution(input) {
  const queue = [];

  const answer = [];

  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    if (item.startsWith('push')) {
      const [order, value] = item.split(' ');
      queue.push(value);
      continue;
    }

    if (item.startsWith('pop')) {
      const shifted = queue.shift();
      if (shifted === undefined) {
        answer.push(-1);
        continue;
      }
      answer.push(shifted);
      continue;
    }

    if (item.startsWith('front')) {
      if (queue.length === 0) {
        answer.push(-1);
        continue;
      }
      answer.push(queue[0]);
      continue;
    }

    if (item.startsWith('back')) {
      if (queue.length === 0) {
        answer.push(-1);
        continue;
      }
      answer.push(queue[queue.length - 1]);
      continue;
    }

    if (item.startsWith('size')) {
      answer.push(queue.length);
      continue;
    }

    if (item.startsWith('empty')) {
      answer.push(queue.length === 0 ? 1 : 0);
      continue;
    }
  }

  console.log(answer.join('\n'));
}
