// 큐 만들기
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
    return this.items[this.front++];
  }
}

// 1. Queue를 초기화.
// 2. 1부터 N까지의 수를 Queue에 넣는다.
// 3. Queue의 크기가 1이 될 때까지 반복한다.
// 4. K번째 숫자가 나오면 pop한다.
// 5. 마지막으로 남은 사람(우승자)을 반환.

const solution = (N, K) => {
  const queue = new Queue();

  for (let i = 1; i < N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }

  return queue.pop();
};

console.log(solution(5, 2));
