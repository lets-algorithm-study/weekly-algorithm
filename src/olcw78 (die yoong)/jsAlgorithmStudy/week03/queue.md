# 큐
FIFO 자료구조

## 활용분야

- 작업 대기열 (Job Queue)
- 이벤터 처리
- polling
- OS I/O buffer
- 제한된 인풋에 많은 것들을 집어 넣으려 할때, 보존&병목 등을 막기 위한 버퍼

## ADT

Stack<T> where T : any
- isFull(): bool
- isEmpty(): bool
- push<T>(item: T)
- front: int
- rear: int
- at<T>(i): T

front, rear 를 가리키는 커서가 존재.
front < rear 인 조건이면 dequeue, enqueue 의 정상조건.

## 원형 큐
front < rear 인 조건에서 front = rear 로 자동 클램프가 되도록 하는 큐.

## 구현방식

shift(), push() 로 뺴고, 넣기 가능하지만 낭비

Linked List 활용하여 쓰자.
기존 array 작업에 O(N) 이 었지만, Linked List 는 O(1) 임 (탐색 제외)