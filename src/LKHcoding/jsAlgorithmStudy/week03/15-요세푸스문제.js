class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    const poped = this.items[this.front];
    this.front++;
    return poped;
  }
}
function solution(N, K) {
  const queue = new Queue();

  // 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // K번째 요소를 찾기 위해
      // 앞에서부터 제거하고 뒤에 추가
    }
    queue.pop(); // K번째 요소 제거
  }

  return queue.pop(); // 마지막으로 남은 요소 반환
}

console.log(solution(5, 2));

function answer(n, k) {
  const arr = new Array(n).fill(0).map((_, idx) => idx + 1);

  let cursor = 0;

  while (arr.length !== 1) {
    const idx = (cursor + k - 1) % arr.length;
    arr.splice(idx, 1);
    cursor = idx;
  }

  return arr[0];
}

console.log(answer(5, 2));
