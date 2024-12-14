// https://school.programmers.co.kr/learn/courses/30/lessons/42584
function solution(prices) {
  const n = prices.length;

  // 각 시점별로 가격이 떨어지지 않은 기간을 저장할 배열
  const answer = new Array(n).fill(0);

  // 가격을 비교할 스택 (인덱스를 저장)
  // 스택에는 아직 가격이 떨어지지 않은 시점의 인덱스들이 들어감
  const stack = [0]; // 첫 번째 인덱스(0)부터 시작

  // 1번 인덱스부터 순회하면서 각 시점의 가격을 이전 가격들과 비교
  for (let i = 1; i < n; i++) {
    // 현재 가격이 스택의 top에 있는 시점의 가격보다 작다면
    // = 가격이 떨어졌다면
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 스택에서 해당 시점을 꺼내고
      const j = stack.pop();

      // 가격이 떨어지지 않은 기간 계산
      // = 현재 시점(i) - 꺼낸 시점(j)
      answer[j] = i - j;
    }

    // 현재 시점을 스택에 추가
    stack.push(i);
  }

  // 마지막까지 가격이 떨어지지 않은 시점들 처리
  while (stack.length > 0) {
    const j = stack.pop();
    // 전체 기간(n-1) - 해당 시점(j)
    answer[j] = n - 1 - j;
  }

  return answer;
}

// 예시:
// prices = [1, 2, 3, 2, 3]
// i = 3일 때 (현재 가격 2)
// stack = [0, 1, 2] (1원, 2원, 3원의 인덱스)
// prices[2] = 3 > 2 이므로 3원은 가격이 떨어진 것
// j = 2를 pop하고 answer[2] = 3 - 2 = 1초 저장
// stack은 [0, 1]이 됨 (1원, 2원의 인덱스는 아직 가격이 떨어지지 않음)

console.log(solution([1, 2, 3, 2, 3])); // [4,3,1,1,0]
console.log(answer([1, 2, 3, 2, 3])); // [4,3,1,1,0]
console.log(answerN2([1, 2, 3, 2, 3])); // [4,3,1,1,0]

// O(N)으로 풀어보기
function answer(prices) {
  // prices 길이
  const n = prices.length;

  // answer 는 정답 리턴용임,
  // 각 원소(주식가격)별 몇초간 안떨어졌는지를 구하라고 했으니
  // answer 길이는 prices 와 같으면 됨.
  const answer = new Array(n).fill(0);

  // stack 은 가격이 떨어지지 않은 인덱스들을 관리하면서 체크할 용도
  // 0번째 주식은 무조건 떨어진적이 없으니 0을 넣어주고 시작
  const stack = [0];

  // 이 포문은 prices 를 한바퀴 순회한다고 보면 됨
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 여긴 주가 떨어져서 들어온 케이스
      const j = stack.pop();

      // 주가가 떨어졌으니 몇초간 안떨어졌는지가 확정되었다.
      // 계산해서 저장해주자.
      answer[j] = i - j;
    }

    // 아직 주가 안떨어진 상황이면 stack 에 i를 push
    stack.push(i);
  }

  // 현재 시점에 stack에 남은 항목들은
  // 주가가 떨어진적 없는 케이스
  while (stack.length > 0) {
    const i = stack.pop();
    answer[i] = n - 1 - i;
  }

  return answer;
}

// O(N^2)로 풀어보기
function answerN2(prices) {
  const n = prices.length;

  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    // 현재 i 보다 뒷 요소들만 잘라서 배열로 만든다.
    const nextPrices = prices.slice(i + 1);

    // i 보다 뒷 요소 중에서 가장 처음 가격이 떨어진 케이스를 찾고,
    // 앞에서 잘라낸 i + 1 크기 만큼 값을 더해준다( 원본 prices 에서 실제 위치 )
    const nearestDownedIdx = nextPrices.findIndex(item => prices[i] > item) + i + 1;

    // n - 1은 전체 기간 (주가의 갯수 - 1)
    // 전체기간 - 주가 처음 떨어진 시점의 Idx
    answer[i] = n - 1 - nearestDownedIdx;
  }

  return answer;
}
