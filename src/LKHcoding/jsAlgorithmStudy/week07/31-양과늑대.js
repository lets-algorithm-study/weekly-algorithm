// https://school.programmers.co.kr/learn/courses/30/lessons/92343

// info = [0,0,1,1,1,0,1,0,1,0,1,1]
// 각 숫자는 해당 위치(인덱스)에 있는 동물을 나타냅니다
// 0은 양, 1은 늑대

// edges = [[0,1],[1,2],[1,4],[0,8]...]
// 각 배열은 [부모노드, 자식노드]를 나타냅니다

// info[0] = 0 은 0번 위치에 양이 있다는 뜻
// info[1] = 0 은 1번 위치에 양이 있다는 뜻
// info[2] = 1 은 2번 위치에 늑대가 있다는 뜻

// edges[0] = [0,1] 은 0번 노드가 1번 노드의 부모라는 뜻
// edges[1] = [1,2] 는 1번 노드가 2번 노드의 부모라는 뜻

// 아주 작은 트리를 만들어봅시다
const smallInfo = [0, 0, 1]; // 3개의 노드만 있는 트리
const smallEdges = [
  [0, 1],
  [0, 2],
]; // 0이 부모고, 1,2가 자식들

// 이것은 이런 모양입니다
//      0(양)
//     / \
//   1(양) 2(늑대)

// 이 경우 가능한 경로는:
// 1. 0 -> 1 : 양 2마리 모을 수 있음
// 2. 0 -> 2 -> 1 : 불가능 (늑대가 양을 잡아먹음)
// 3. 0 -> 1 -> 2 : 양 2마리, 늑대 1마리로 끝남
function solution(info, edges) {
  // 1. 먼저 트리 구조를 만듭니다
  const tree = {};

  // 각 노드의 자식들을 저장할 구조를 만듭니다
  for (const [parent, child] of edges) {
    if (!tree[parent]) {
      tree[parent] = [];
    }
    tree[parent].push(child);
  }

  let maxSheep = 0; // 최대로 모을 수 있는 양의 수

  // DFS 실행
  // 현재 위치, 현재 양의 수, 현재 늑대의 수, 갈 수 있는 다음 노드들
  function move(currentNode, sheep, wolf, nextPossible) {
    // 현재 노드의 동물 확인
    if (info[currentNode] === 0) {
      sheep += 1; // 양이면 양의 수 증가
    } else {
      wolf += 1; // 늑대면 늑대의 수 증가
    }

    // 늑대가 양보다 많으면 불가능
    if (wolf >= sheep) return;

    // 현재까지의 양의 수가 최대값보다 크면 갱신
    maxSheep = Math.max(maxSheep, sheep);

    // 다음에 갈 수 있는 노드들 계산
    const possibleNodes = [...nextPossible]; // 기존에 갈 수 있던 노드들

    // 현재 노드의 자식들 추가
    if (tree[currentNode]) {
      possibleNodes.push(...tree[currentNode]);
    }

    // 현재 노드는 제거 (이미 방문했으므로)
    const index = possibleNodes.indexOf(currentNode);
    if (index > -1) {
      possibleNodes.splice(index, 1);
    }

    // 가능한 모든 다음 노드로 이동해보기
    for (const nextNode of possibleNodes) {
      move(nextNode, sheep, wolf, possibleNodes);
    }
  }

  // 0번 노드(루트)에서 시작
  move(0, 0, 0, [0]);

  return maxSheep;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);

/**
 * 이 문제는 사람이 이해하기 로는 방문했던 노드로 되돌아가서
 * 다음 방문 가능한 노드들을 탐색해 나가야 하나 싶었는데
 * 그럴 필요가 없었다.
 * 그냥 루트에서 부터 모든 노드 탐색해가면서 최대 양 수를 구하면 되는 개념이다.
 * 탐색 과정 자체가 닥터스트레인지가 시간 되돌리듯이
 * 재귀 내에 return 부분과 for 문 재귀 실행 부분을 보면
 * 문제가 없던 부분으로 되돌아가서 모든 노드를 탐색한다.
 */
