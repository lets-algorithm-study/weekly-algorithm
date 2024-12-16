// 주식 가격이 떨어지지 않은 기간(초)을 계산하는 문제

// 1. prices 배열의 길이 정의
// 2. 결과를 저장할 배열 초기화 (모두 0으로 설정)
// 3. 스택 초기화: 첫 번째 인덱스를 넣어준다.
// 4. 현재 가격을 기준으로 반복 시킨다.
// 5. 스택의 맨 위 인덱스의 가격이 현재 가격보다 크면 스택에서 인덱스를 꺼낸다.
// 6. 가격이 떨어질 때까지 걸린 시간을 계산하여 저장한다.
// 7. 현재 인덱스를 스택에 추가한다.
// 8. 스택에 남아 있는 인덱스들 처리한다.
// 9. 끝까지 가격이 떨어지지 않은 시간 계산해서 저장한다.

function solution(s) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 1; i < n; i++) {
    // 현재 가격을 기준으로 반복
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = n - top - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
