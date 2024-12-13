# 큐의 개념

"줄을 서다" 라는 의미를 가지고 있음.
먼저 들어간 데이터가 먼저 나오는 자료구조 => 선입선출 또는 FIFO

스택과 마찬가리고 큐도 삽입하는 연산을 PUSH, 꺼내는 연산을 POP이라고 한다.

## 큐의 활용

- 작업 대기열
- 이벤트 처리
- 줄 서는 사람

## 큐의 ADT

연산

- boolean isFull
- boolean isEmpty()
- void push(itemType item)
- itemType pop()

상태

- int front
- int rear
- ItemTypedata[maxsize]

## 큐 구현하기

- push
- shift
- 배열을 이용하여 큐를 구현
- 연결 리스트를 이용하여 큐를 구현

## shift()

가장 마지막 요소를 추가하는 메서드 push
가장 첫번째 요소를 삭제하는 메서드 shift

시간복잡도때문에 진짜 큐가 아님
