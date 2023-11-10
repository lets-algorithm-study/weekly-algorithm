const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

solution(n, k, coins);

function solution(n, k, coins) {
  let count = 0;
  let amount = k;

  for (let i = n - 1; i >= 0; i--) {
    if (coins[i] <= amount) {
      count += Math.floor(amount / coins[i]);
      amount %= coins[i];
    }
  }

  console.log(count);
}
