const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const nums = input.map(Number);

solution(nums);

function solution(nums) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  const 최대공약수 = gcd(nums[0], nums[1]);

  const 최소공배수 = (nums[0] * nums[1]) / 최대공약수;

  console.log([최대공약수, 최소공배수].join('\n'));
}
