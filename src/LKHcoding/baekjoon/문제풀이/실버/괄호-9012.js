const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let first = +input[0];
let rest = input.filter((_, idx) => idx !== 0).map(item => item.split(''));

solution(first, rest);

function solution(N, data) {
  data.forEach(strList => {
    const strArr = strList.filter(i => i === '(' || i === ')');
    let stack = 0;

    for (const item of strArr) {
      if (item === '(') {
        ++stack;
      }
      if (item === ')') {
        --stack;
      }
      if (stack < 0) {
        console.log('NO');
        return;
      }
    }

    if (stack === 0) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  });
}

/**
 * 이번에도 스택을 그냥 숫자로 풀어버렸다.
 * 숫자로 안해도 풀 수 있겠지만 숫자로 하는게 더 간편했다.
 * 스택에 여러 종류의 item들이 담길 수 있고 비교를 해야한다면
 * 값을 직접 스택에 담아서 체크하도록 구현해보자.
 */
