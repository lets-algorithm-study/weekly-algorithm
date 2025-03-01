const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

class Deque {
  constructor() {
    this.store = [];
    this.front = 0;
    // back 커서는 항상 배열 마지막값 보다 뒤에 가있다.
    this.back = 0;
  }

  push_back(value) {
    this.store[this.back] = value;
    this.back++;
  }

  push_front(value) {
    if (this.front > 0) {
      this.front--;
      this.store[this.front] = value;
    } else {
      // front가 0인 경우, 모든 요소를 뒤로 밀고 back을 증가시킨다.
      for (let i = this.back; i > this.front; i--) {
        this.store[i] = this.store[i - 1];
      }
      this.store[this.front] = value;
      this.back++;
    }
  }

  pop_front() {
    if (this.empty() === 1) return -1;
    const value = this.store[this.front];
    this.front++;
    return value;
  }

  pop_back() {
    if (this.empty() === 1) return -1;
    this.back--;
    const value = this.store[this.back];
    return value;
  }

  size() {
    return this.back - this.front;
  }

  empty() {
    return this.front === this.back ? 1 : 0;
  }

  frontVal() {
    return this.empty() === 1 ? -1 : this.store[this.front];
  }

  backVal() {
    return this.empty() === 1 ? -1 : this.store[this.back - 1];
  }
}

solution(input);

// 문제 해결 로직
function solution(input) {
  const deque = new Deque();
  const output = [];

  for (const command of input) {
    const [cmd, value] = command.split(' ');

    switch (cmd) {
      case 'push_back':
        deque.push_back(Number(value));
        break;
      case 'push_front':
        deque.push_front(Number(value));
        break;
      case 'pop_front':
        output.push(deque.pop_front());
        break;
      case 'pop_back':
        output.push(deque.pop_back());
        break;
      case 'size':
        output.push(deque.size());
        break;
      case 'empty':
        output.push(deque.empty());
        break;
      case 'front':
        output.push(deque.frontVal());
        break;
      case 'back':
        output.push(deque.backVal());
        break;
    }
  }

  console.log(output.join('\n'));
}

/* NOTE: 나중에 Deque class 다시 구현해보자...
 *   복잡해서 다시 구현하면 할 수 있을지 모르겠다. */
