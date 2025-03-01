// 한 단어 입력 - 구분자, 띄어쓰기 미포함
/* fs Module */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

console.log(input);

/* readline Module */

// 문제 풀이
function solution(input) {
  // 답변 출력
  console.log(input);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line; // 입력받은 문자열, line
  input = parseInt(line); // 형변환, parseInt
  rl.close(); // 입력 종료
}).on('close', function () {
  solution(input); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
