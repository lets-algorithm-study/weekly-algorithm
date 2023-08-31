const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(N) {
  const queue = Array.from(Array(N), (_v, k) => k + 1);
  let head = 0;
  let tail = N;

  while (head < tail - 1) {
    // 맨 앞 카드를 버린다.
    head++;

    // 그 다음 카드를 덱의 맨 뒤로 옮긴다.
    queue[tail++] = queue[head++];

    // tail을 사용한 이유는 덱 이라서 명시적으로 쓴것.
    // tail안쓰고 queue에 push하고, queue.length를 활용해도 풀 수는 있음.
  }

  console.log(queue[head]);
}

/**
 * 그냥 배열에다가 shift, pop을 이용해서 풀면 답은 맞지만 시간초과임
 * 시간 초과가 나는 이유는 shift를 쓰면 나머지 요소들의 index 를 처리해줘야 하므로
 * 복잡도가 O(N^2)라고 함.
 * Linked List로도 풀 수 있다고 하지만 그걸 쓰고싶지는 않아서 찾아보니
 *
 * 덱(Double-Ended Queue) 이라는 자료구조를 활용할 수도 있음.(아래는 덱의 활용 케이스)
 *
 * 덱(Double-Ended Queue)은 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조입니다.
 * 큐(Queue)나 스택(Stack)과 유사하지만,
 * 덱은 두 가지의 자료구조의 기능을 합쳐 놓은 것으로 볼 수 있습니다.
 *
 * 1. 양쪽에서 요소의 추가/제거가 필요한 경우
 * 예: 팰린드롬 문자열 체크, 스크롤 가능한 뷰의 데이터 관리 등
 * 2. 슬라이딩 윈도우 알고리즘
 * 연속된 데이터에서 윈도우의 최대값, 최소값을 빠르게 찾을 수 있습니다.
 * 예: 주식 가격의 이동 평균, 데이터 스트림의 최대/최소 값 등
 * 3. 중간 요소의 제거가 적고, 양 끝 요소의 추가/제거가 빈번한 경우
 * 예: 실시간으로 데이터가 추가되고, 가장 오래된 데이터나 가장 최신 데이터를 빠르게 확인해야 하는 경우
 * 4. 큐와 스택을 하나로 합쳐 사용해야 하는 경우
 * 예: 브라우저의 앞으로/뒤로 가기 기능
 * 5. BFS(Breadth-First Search) 등에서 레벨 순회가 필요한 경우
 * 같은 레벨의 노드를 앞쪽에, 다음 레벨의 노드를 뒤쪽에 추가할 수 있습니다.
 * 6. 다양한 문제 해결 전략
 * 덱은 상황에 따라 큐나 스택처럼도 사용할 수 있으므로, 다양한 문제에서 유연하게 활용 가능합니다.
 * 덱의 이런 특성 때문에, 알고리즘 문제나 실제 어플리케이션에서 다양하게 사용됩니다.
 */
