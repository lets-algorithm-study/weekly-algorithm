# 그래푸

노드, 간선 이용한 비선형 데이터 구조
데이터 간의 관계를 표현하는 데 사용.

## 그래프 용어 정리

- 노드(node) : 그래프의 기본 요소
- 간선(edge) : 노드를 연결하는 선
- 인접(adjacency) : 두 노드가 간선으로 직접 연결된 상태
- 차수(degree) : 노드에 연결된 간선의 수
- 경로(path) : 노드들을 연결하는 간선들의 집합
- 사이클(cycle) : 시작 노드와 끝 노드가 같은 경로

## 그래프 종류

- 방향 그래프(directed graph) : 간선에 방향이 있는 그래프
- 무방향 그래프(undirected graph) : 간선에 방향이 없는 그래프
- 가중치 그래프(weighted graph) : 간선에 가중치가 있는 그래프
- 비가중치 그래프(unweighted graph) : 간선에 가중치가 없는 그래프

## 시작과 끝의 연결 여부를 보는 순환

- 순환(cycle) 경로 : 시작해서 간선을 따라 다시 돌아오는 경로가 있는 것 (시작 == 끝)
- 비순환(acyclic)

## 그래프 구현

구현 방식에는

- 인접 행렬(adjacency matrix): 2차원 배열로 그래프를 표현하는 방식
- 인접 리스트(adjacency list): 연결 리스트로 그래프를 표현하는 방식

가 있다.

## 인접 행렬

- 노드의 개수가 n개일 때, n x n 크기의 2차원 배열을 만든다.
- 노드가 연결되어 있으면 1, 연결되어 있지 않으면 0으로 표현한다.

## 인접 리스트

- 노드의 개수가 n개일 때, n개의 연결 리스트를 만든다.
- 각 노드에 연결된 노드들을 연결 리스트로 표현한다.

## 장단점

### 인접 행렬의 장단점

#### 단점 

1. 인접 행렬로 희소 그래프 표현 시 (노드 수에 비해 간선이 매우 적은 그래프) ->
 -> 인접 행렬은 크기가 고정. -> 노드가 N개라면 모든 간선이 연결된 최악의 경우 N x N 크기의 2차원 배열을 만들어야 함.
 -> 실제로 전부 사용하지는 않아 비효율적.

2. 노드들의 값 차이가 매우 큰 그래프를 만드는 경우 -> 배열의 인덱스가 각 노드들의 값을 의미 -> 노드 값이 크면 메모리 낭비

#### 장점

1. 간선 정보 확인 시 TC-> O(1). 임의 접근으로 노드 간 간선 정보를 바로 확인 가능.

2-> 93 이 연결되어있는지 확인? arr[2][93] 에 가중치가 있는지 확인!

### 인접 리스트의 장단점

인접 행렬과 정반대의 장단점을 가진다.
실제 연결된 노드에 대해서만 노드의 값을 노드에 담아 연결하기만 하면 됨 -> 메모리 절약.
연결된 노드가 많으면 노드를 연결한 리스트의 길이만큼 탐색해야 함 -> 탐색시간 TC -> O(N)

보통은 시간 제약에서 장점을 취하기 위해 인접 행렬 방식으로 많이 푼다.
노드 개수 <= 1000

## 그래프 탐색

- 모든 노드를 탐색. 더 이상 탐색할 노드가 없을 때까지 반복. 없으면 최근에 방문했던 노드로 되돌아간 다음
  가지 않은 노드를 방문 (DFS)
- 현재 노드에서 가장 가까운 노드부터 모두 방문하고 다음 노드로 이동. (BFS)

### DFS

시작 --- 간선을 따라 ---> 최대 깊이 노드
방문 완
이전에 방문한 노드를 거슬러 올라가며 방문하지 않은 노드로 다시 반복.

스택 이용

1. 시작 노드 정하기
2. 스택에 푸시
3. 스택이 비었는지 확인. 비었으면 방문할 수 있는 모든 노드를 방문한 것. -> 탐색 종료
4. 스택에서 노드를 팝. 해당 원소는 최근에 스택에 푸시한 노드.
5. 팝한 노드의 방문 여부를 확인. 이미 방문했다면 별도의 처리 X.
6. 방문한 노드와 인접한 모든 노드를 확인. 방문치않은 노드는 스택에 푸시. 

고려 1. 탐색할 노드가 없을 때까지 간선을 타고 내려갈 수 있어야 함.
고려 2. 가장 최근에 방문한 노드를 알아야 함.
고려 3. 이미 방문한 노드인지 확인할 수 있어야 함.

"가장 깊은 노드까지 방문한 후에 더 이상 방문할 노드가 없으면 최근 방문한 노드로 돌아온 다음, 해당 노드에서
방문할 노드가 있는지 확인한다".

탐색 역방향으로 되돌아가기 -> 백트리킹.

재귀 함수 이용

dfs() 라고 선언 dfs(N) 호출 시 다음 동작으로.

dfs(N): N번 노드를 방문 처리하고 N번 노드와 인접한 노드 중 아직 방문하지 않은 노드를 탐색

1. 시작노드 1 -> dfs(1)
   1을 방문 처리
2. 1에 인접한 dfs(4) 호출. 
   아직 dfs(1) 은 탈출하지 않았음.
3. dfs(4) 실행되어 4는 방문 처리.
   4에 인접한 dfs(2) 호출.
4. dfs(2) 실행되어 2는 방문 처리.
   2에 인접한 dfs(3) 호출.
5. dfs(3) 실행되어 3은 방문 처리.
   3에 인접한 노드 x -> 함수 실행없이 탈출.
6. dfs(4) -> dfs(2) -> dfs(3) -> dfs(1) 순으로 백트래킹.
7. dfs(4) -> dfs(3) 까지는 인접한 노드가 없어 걍 탈출.
8. dfs(3) -> dfs(1) 은 인접한 노드 5 -> dfs(5) 호출.
9. dfs(5) 실행되어 5는 방문 처리.
   5에 인접한 노드 x -> 함수 실행없이 탈출.

## BFS

시작 노드와 거리가 가장 가까운 노드를 우선하여 방문.

거리 = 시작 차수 - 목표 차수

1. 큐에 시작 노드 추가 및 방문 처리
2. 큐가 비었는지 확인. 비었으면 모든 노드 방문함. (탐색 종료)
3. 큐에서 노드를 팝
4. 팝한 노드와 인접한 모든 노드 확인.
5. 그 중 방문 안한 노드를 큐에 푸시

고려1. 현재 방문 노드와 직접 연결된 모든 노드를 방문할 수 있어야 함.
고려2. 이미 방문한 노드인지 확인할 수 있어야 함.

가장 먼저 발견한 노드부터 발견 -> 큐 활용.

## DFS vs BFS

DFS 는 깊게 탐색 후 되돌아오기
BFS 는 시작 노드에서 인접 노드부터 방문.

### 깊이 탐색한 다음 되돌아오는 DFS

모든 가능한 해를 찾는 백트래킹 알고리즘.
그래프의 사이클을 감지.

코테에서는 최단 경로를 찾는게 아니면 DFS 우선 고려!

### 최단 경로를 보장하는 BFS

찾은 노드가 시작노드로 부터 최단 경로임을 보장.
문제에 대한 답이 많은 경우 BFS는 이 답 중에서도 최단거리의 답을 찾음.

미로 찾기 문제에서 최단 경로를 찾기.
네트워크 분석문제에 활용

### 방문처리 시점이 다른 이유.
DFS는 스택에서 팝하며 방문처리.
BFS는 큐에 푸시하며 방문처리.

두 탐색 알고리즘은 탐색방식이 달라서 그렇다.
DFS는 스택에 다음에 방문할 인접한 노드를 푸시. 스택에 푸시할 노드는 방문 예정인 노드이므로 팝하며 방문처리.
BFS는 지금 방문할 노드를 푸시 -> 그래야 인접한 노드로부터 탐색할 수 있음.


# 그래프의 최단 경로

가중치 없는 그래프 -> 간선 개수가 가장 적은 경로  
가중치 있는 그래프 -> 간선 가중치의 총합이 최소가 되는 경로.

## Dijkstra 알고리즘
1. 시작 노드를 설정.
2. 시작 -> 특정 노드까지의 최소 비용을 저장할 공간, 직전 노드를 저장할 공간 마련
- 최소 비용을 저장할 공간은 모두 매우 큰 값으로 저장
- 시작 노드의
 최소 비용은 0, 직전 노드는 자기 자신.
3. 해당 노드를 통해 방문할 수 있는 노드 중, 즉 아직 방문하지 않은 노드 중 현재까지 구한 최소비용이 가장 적은 노드를 선택.
- 해당 노드를 거쳐서 각 노드까지 가는 최소 비용과 현재까지 구한 최소 비용을 비교하여 작은 값을 각 노드의 최소 비용으로 갱신.
- 이떄 직전 노드도 같이 갱신
4. 노드 개수에서 1을 뺀 만큼 반복.

## 벨만-포드 알고리즘

노드->노드 까지의 최소 비용.
매 단계마다 모든 간선의 가중치를 다시 확인하여 최소 비용을 갱신.
음의 가중치를 가지는 그래프에서도 최단 경로를 보장.

1. 시작 노드를 설정한 다음 시작 노드의 최소 비용 0, 나머지 노드는 INF 로 초기화. 이후 최소 비용 갱신시 직전 노드도 갱신.
2. 노드 개수 -1 만큼 다음 연산을 반복.
- 시작 노드에서 갈 수 있는 각 노드에 대하여 전체 노드 각각을 거쳐갈 때 현재까지 구한 최소 비용보다
  더 적은 최소 비용이 있는지 확인하여 갱신. 최소 비용을 갱신할 때, V의 직전 노드 값도 같이 갱신.
3. 2-1. 을 마지막으로 한 번 더 수행하여 갱되는 최소 비용이 있는지 확인. 있으면 음의 순환이 있음을 의미!

### 왜 정점 개수 -1 만큼 반복? 매 라운드 마다 최단 경로가 1개씩 확정되므로!
N-1 번 연산 반복 -> 노드N 에 대한 최단 경로가 결정.

### 왜 한 번 더? 음의 순환을 찾기 위해서.
음의 가중치가 있으면 음의 가중치가 중첩되어 각 라운드 의 노드 과정마다 검사해야할 최소 비용이 점점 줄어 더 이상 최단 경로를 구할 수 없다..
-> 엄밀히 말하면 그래프에 음의 순환이 있으면 어떤 알고리즘이라도 최단 경로를 구할 수 없다.

