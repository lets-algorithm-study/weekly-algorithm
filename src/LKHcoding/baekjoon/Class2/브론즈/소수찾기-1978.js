const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);

solution(nums);

function solution(nums) {
  let count = 0;

  nums.forEach(item => {
    for (let i = 2; i <= item; i++) {
      if (item % i === 0) {
        if (item === i) {
          count++;
        }
        break;
      }
    }
  });
  console.log(count);
}
