// https://school.programmers.co.kr/learn/courses/30/lessons/159994

class Queue {
  items = [];

  front = 0;
  rear = 0;

  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }

  // 문제 푸링에서 큐의 첫번째 아이템으로 확인이 필요해서 제공하는 메소드
  firstItem() {
    return this.items[this.front];
  }
}

function answer(cards1, cards2, goal) {
  const cards1Queue = new Queue(cards1);
  const cards2Queue = new Queue(cards2);
  const goalQueue = new Queue(goal);

  while (goalQueue.size() > 0) {
    if (cards1Queue.firstItem() === goalQueue.firstItem()) {
      cards1Queue.pop();
      goalQueue.pop();
      continue;
    }
    if (cards2Queue.firstItem() === goalQueue.firstItem()) {
      cards2Queue.pop();
      goalQueue.pop();
      continue;
    }

    break;
  }

  return goalQueue.size() === 0 ? 'Yes' : 'No';
}

console.log(
  answer(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
