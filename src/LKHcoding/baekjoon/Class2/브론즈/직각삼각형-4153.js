const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const triangles = input.map(item => item.split(' ').map(Number));

solution(triangles);

function solution(triangles) {
  triangles.pop();
  const result = triangles.map(triangle => {
    triangle.sort((a, b) => a - b);
    return triangle[0] ** 2 + triangle[1] ** 2 === triangle[2] ** 2 ? 'right' : 'wrong';
  });
  console.log(result.join('\n'));
}
