const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.shift();
solution(input);

function solution(input) {
  input.sort((a, b) => {
    if (a.length === b.length) {
      return a < b ? -1 : 1;
    }
    return a.length - b.length < 0 ? -1 : 1;
  });

  const set = new Set(input);

  console.log([...set].join('\n'));
}
