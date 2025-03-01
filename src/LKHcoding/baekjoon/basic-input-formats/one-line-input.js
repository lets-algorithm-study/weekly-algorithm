// 한 줄 입력 - 구분자, 띄어쓰기 포함
/* fs Module */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let [A, B] = input.map(num => Number(num));
console.log(A + B);

/* readline Module */

// 문제 풀이
function solution(input) {
  // 답변 출력, list
  console.log(input);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line; // 입력받은 문자열, line
  rl.close(); // 입력 종료
}).on('close', function () {
  // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
  list = input.split(' ').map(el => Number(el));

  solution(list); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
