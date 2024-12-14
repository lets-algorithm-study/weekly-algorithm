## Queue, ADT

---
#### ADT(abstract data type) 추상자료형
- 인터페이스만 있고 실제로 구현 되지 않은 자료형
- 알고리즘을 이해하는 데 도움이 된다

#### Queue

- FIFO(First In First Out) 구조
- isFull, isEmpty, push, pop, front, rear, data 등의 메소드를 가진다
- 선형 Queue를 pop을 할때 데이터를 제거하는 것이 아닌 front를 가리키는 포인터를 이동시키는 것이다.
- 이를 개선한 것이 원형큐이다.
- 자바스크립트에서는 내장된 메소드가 없어서 배열로 구현한다
- 하지만 배열로 구현할 경우 배열의 메소드를 사용할 수 있어서 편리하다


#### javascript에서의 Queue
```javascript
let queue = [];
queue.push(1);
queue.push(2);
queue.shift();
queue.push(3);
console.log(queue); // [2, 3]
```

### 배열을 이용하는 방식
```javascript
class Queue {
  items = [];
  front = 0;
  rear = 0;
  push(item) {
    this.items.push(item);
    this.rear++;
  }
  
  pop() {
    return this.items[this.front++];
  }
  
  isEmpty() {
    return this.front === this.rear;
  }
}
```

### 연결 리스트를 이용하는 방식
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  push(data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
    pop() {
        if(!this.head) return null;
        const removeNode = this.head;
        this.head = this.head.next;
        
        if(!this.head) {
            this.tail = null;
        }
        
        this.size--;
        
        return removeNode.data;
    }
    
    isEmpty() {
        return this.size === 0;
    }
  

}
```