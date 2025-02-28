const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();

solution(+N, input.map(Number));

function solution(N, sequence) {
  // 스택을 저장할 배열 선언
  const stack = [];
  // 연산 결과를 저장할 배열 선언 (+, -)
  const answer = [];
  // 스택에 넣을 숫자, 초기값은 1
  let num = 1;

  // 입력 받은 수열을 순회
  for (let i = 0; i < N; i++) {
    const target = sequence[i];

    // 스택의 마지막 값이 target 값보다 작을 동안
    // 스택에 값을 추가하고 answer에 '+' 추가
    while (num <= target) {
      stack.push(num);
      ++num;

      answer.push('+');
    }

    // 스택의 마지막 값과 target 값이 같으면 스택에서 제거하고 answer에 '-' 추가
    if (stack[stack.length - 1] === target) {
      stack.pop();
      answer.push('-');
    } else {
      // 같지 않으면 'NO' 출력 후 종료
      console.log('NO');
      return;
    }
  }

  // answer 배열을 문자열로 변환하여 출력
  console.log(answer.join('\n'));
}

/**
 * 이건 나중에 다시 한번 풀어보자.
 * 풀이 방법을 종이나 메모에 말로 설명을 적은다음에
 * 그걸 코드로 구현 해야할것같다.
 * 뭔가 쉬운것같으면서도 코드가 바로 짜기 어렵다...
 */
