# 트리 개념

- 계층 구조를 표현하는 용도로 많이 사용
- 파일시스템, 디렉터리 구조
- 인공지능
- 자동 완성 기능
- 데이터베이스

트리는 나무를 거꾸로 뒤집어 놓은 모양이다.<br/>
나무의 뿌리(root)가 가장 맨위에 있음.

## 노드

- 노드는 트리를 구성하는 요소
- 가장 위에 있는 노드 : 루트 노드

## 간선 또는 엣지

- 노드와 노드를 이어주는 선
- 트리는 노드와 노드가 단방향 간선으로 연결되어 있음.
- 루트 노드로 부터 특정 노드까지 거쳐가는 최소한 간선 수를 레벨로 표현.

## 부모-자식, 형제 관계를 가지는 노드

- 간선으로 연결된 노드들은 서로 부모-자식 관례가 있다고 표현.
- 상대적으로 위에 있는 노드를 부모 노드.
- 아래에 있는 노드를 자식 노드.
- 같은 위치에 있는 경우 형제 노드.

## 리프 노드

자식이 없는 노드

## 아래로 향하는 간선의 개수,차수

차수는 특정 노드에서 아래로 향하는 간선의 개수.<br/>
ex) 루트에서 뻗어나간 간선의 갯수...?

# 이진 트리 표현하기

- 배열이나 포인터로 구현 가능

## 배열로 표현하기

- 배열은 선형 자료구조
- 트리는 계층 자료구조

배열로 트리를 표현하려면 3가지 규칙이 있음.

- 루트 노드는 배열 인덱스 1번에 저장
- 왼쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 X 2
- 오른쪽 자식 노드의 배열 인덱스는 부모 노드의 배열 인덱스 X 2 + 1

## 주의

- 트리를 배열로 보면 빈 값이 꽤 보임.
- 자식이 없거나 쓰지 않는 인덱스들은 모두 빈값으로 메모리 낭비가 됨.

- 그렇다고 배열 표현이 나쁜건 아님.
- 이진 트리를 배열로 표현하는 방식은 굉장히 구현이 쉬움
- 메모리만 넉넉하면 구현 시간을 단축하는 용도로 좋음

## 이진트리 순회하기

순회란, 데이터가 있을때 데이터를 빠짐없이 방문하는 것을 의미.

**현재 노드를 부모노드라고 가정할때**

- 전위 순회 : 부모 노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드
- 중위 순회 : 왼쪽 자식 노드 -> 부모 노드 -> 오른쪽 자식 노드
- 후위 순회 : 왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 부모 노드

## 포인터로 표현하기

- 배열과 달리 인덱스 연산을 하지 않아서 메모리 공간을 낭비하지 않음.
- 구현 난이도가 배열보다 높음.

# 이진트리 탐색하기

- 이진 트리에서 가장 중요한 것,
- 바로 탐색을 효율적으로 할 수 있도록 트리를 구축하는 것.
- 예를들면 물건을 잘 정리하면 쉽게 찾을 수 있는 원리

## 이진 탐색 트리 구축하기

EX ) 3 -> 4 -> 2 -> 8 -> 9 -> 7 -> 1

데이터 크기를 따져 현재 노드보다 값이 작으면,<br/>
왼쪽 자식 위치<br/>
현재 노드보다 크거나 같으면,<br/>
오른쪽 자식 위치

## 이진 탐색 트리 탐색하기

1. 찾으려는 값이 현재 노드의 값과 같으면, 탐색 종료. 크면, 오른쪽 노드 탐색
2. 본인이 찾으려는 값이 현재 노드의 값보다 작으면 왼쪽 노드를 탐색.
3. 값을 찾으면 종료. 노드가 없어질때까지 탐색하다가 값이 없으면, 현재 트리에 값이 없는 것.

## 배열 탐색과 비교

- 배열은 순회하면서 탐색
- 이진트리는 방향을 잡아가면서 탐색
- 그래서 이진트리 탐색 방법이 훨씬 빠름.

## 중요!!

- 크면 오른쪽 작으면 왼쪽
- 데이터 크기에 따라 하위 데이터 중 한 방향을 검색 대상에서 제외해서 검색을 빠르게 만들어줌.

## 이진 탐색 트리 시간 복잡도

- 트리 균형에 의존
- 균형이 잘 잡혔다라는 뜻은?
  각 노드의 차수가 비슷하게 유지되고, 각 노드의 자식 노드 수가 비슷하게 유지 되는 것.
- O(logN)

## 이진 탐색 트리와 배열 탐색의 효율 비교

- 이진 탐색 트리의 균형이 맞지 않으면, 초이가의 경우 O(N)과 같다.

# 문제 후기

## 1. 트리 순회

- 트리 설명 한 걸 훑어봐야 풀 수 있는 문제 같음
- 하나하나씩 설명해준대로 식 써주면 금방 풀 수 있는 문제

## 2. 이진 탐색 트리 구현

- 아직 class 로 먼저 접근하는게 익숙하지 않아서 정답을 봐버림.
- 정답을 봐도 클래스에서 역할을 먼저 정의하고 구현하는 건가 싶긴한데, 완벽하게 이해하지 못했음.
- class 에 대해서 좀 더 공부하고 익숙해지는게 좋을 것 같음.

## 3. 예상 대진표

- 문제는 길지만, 이해하면 쉬운 편,
- 매 라운드마다 참가자 번호는 다음 라운드로 넘어갈 때 **(현재 번호 / 2)**로 갱신된다는 부분이 중요 포인트.

## 4. 다단계 칫솔 판매

- 어려워서 못 풀었습니다...시간이 부족해요...답안지 보고 작성.

## 5. 미로 탈출

- 어려워서 못풀었습니다..시간이 부족해요....답안지 보고 작성.
