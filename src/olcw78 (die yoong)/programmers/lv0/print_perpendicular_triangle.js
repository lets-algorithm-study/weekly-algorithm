// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

// in > 3
// out >
// *
// **
// ***
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const n = Number(input[0]);
  for (let i = 0; i < n; ++i) {
    let line = '';
    for (let j = 0; j < i + 1; ++j) {
      line += '*';
    }
    console.log(line);
  }
});


// 다른 사람 풀이
const n = Number(input[0]);
for (let i = 0; i < n + 1; ++i) {
  console.log('*'.repeat(i));
}