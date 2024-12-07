## 실패율

---
1. 현재 스테이지에 도달한 플레이어수를 구하는 것과, 실패율이 같을 때 정렬을 어떻게 할 것인가에 대해 고민이 많이 되었다
2. 매 스테이지마다 스테이지 이상으로 간 플레이어수와 실패한 플레이어를 수를 구하고 map에 저장
3. map을 값으로 정렬하고 같을 시에는 key로 정렬하였다


## 방문길이

---
1. 중복만 처리하면 쉽게 할 수 있을것같았는데 잘 떠오르지 않았다
2. 길을 이동할때 양쪽으로 이동하는 것을 모두 추가하고 set에 저장하여 중복을 제거하였다


## stack, ADT

---
#### ADT(abstract data type) 추상자료형
- 인터페이스만 있고 실제로 구현 되지 않은 자료형
- 알고리즘을 이해하는 데 도움이 된다

#### stack
- LIFO(Last In First Out) 구조
- push, pop, top, empty, size,  등의 메소드를 가진다
- 자바스크립트에서는 내장된 메소드가 없어서 배열로 구현한다
- 하지만 배열로 구현할 경우 배열의 메소드를 사용할 수 있어서 편리하다

```javascript
let stack = [];
stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
console.log(stack); // [1, 3]
```

## 괄호 회전하기

---
1. 문자를 회전방법에는 인덱스를 활용한 방법이 좋아보인다

```javascript
// 내가 구현한 방식
s = s.slice(1) + s[0];

// 인덱스를 활용한 회전
const length = s.length;
const c = s[(i + j) % length];
```
