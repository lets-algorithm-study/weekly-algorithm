const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

solution(n, k, coins);

function solution(n, k, coins) {
  const availableCoins = coins.filter(item => item <= k);

  let amount = k;
  let count = 0;

  for (let i = availableCoins.length - 1; i >= 0; i--) {
    const item = availableCoins[i];

    if (item <= amount) {
      count += Math.trunc(amount / item);
      amount = amount % item;
    }

    if (amount === 0) {
      break;
    }
  }

  console.log(count);
}
