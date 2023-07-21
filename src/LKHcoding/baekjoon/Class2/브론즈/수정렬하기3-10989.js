const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

console.log(input.map(Number).sort((a,b) => a - b).join('\n'))


// 이문제는 노드로 풀수 없음.(백준에서 메모리 초과 무조건 뜨는 문제..)
