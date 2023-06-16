const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

solutionDfs(N, M);

function solutionDfs(N, M) {
  function dfs(arr, depth = 0) {
    if (arr.length === M) {
      console.log(arr.join(' '));
    }

    for (let i = arr.length + 1; i <= N; i++) {
      if (arr.includes(i) || arr[arr.length - 1] >= i) {
        continue;
      }
      dfs([...arr, i], depth + 1);
    }
  }

  dfs([]);
}
