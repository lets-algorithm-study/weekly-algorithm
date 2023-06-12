const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

solutionDfs(N, M);

function solutionDfs(N, M) {
  function dfs(arr, depth = 0) {
    if (arr.length === M) {
      console.log(arr.join(' '));
    }

    // 여기 이해 잘하는게 중요함
    // arr을 1부터 만들어 나간다.
    // 1, 2, 3, 4 까지 만들면 M길이 될때 출력하고 마지막 재귀는 종료됨.
    // 1, 2, 3 <- 여기 루프타던 재귀 함수 시점으로 다시 돌아가서
    // 1, 2, 4 <- 로 진행된다.
    // 1, 2, 4, x <- x는 if문에 의해 가능한 숫자만 들어가게 됨.
    // 이런식으로 작은수부터 올려가면서 가능한 수들을 만들어나간다.
    for (let i = 1; i <= N; i++) {
      if (arr.includes(i)) {
        continue;
      }
      dfs([...arr, i], depth + 1);
    }
  }

  dfs([]);
}
function solutionDfsStack(N, M) {
  // 스택 선언: 각 가능한 수열을 저장하기 위한 자료구조
  const stack = [];

  // 초기 수열 생성: 1부터 N까지의 숫자를 각각 수열의 시작으로 하는 수열을 스택에 넣음
  for (let i = N; i >= 1; i--) {
    stack.push([i]);
  }

  // 스택이 빌 때까지 반복
  while (stack.length > 0) {
    // 스택의 가장 위에 있는 수열을 꺼냄
    const current = stack.pop();

    // 꺼낸 수열의 길이가 M이라면 해당 수열을 출력
    if (current.length === M) {
      console.log(current.join(' '));
      continue;
    }

    // 꺼낸 수열 뒤에 붙일 수 있는 숫자를 찾아서 스택에 넣음
    // 이미 꺼낸 수열에 포함된 숫자는 제외
    for (let i = N; i >= 1; i--) {
      if (!current.includes(i)) {
        stack.push([...current, i]);
      }
    }
  }
}

/**
 * 이 문제도 스스로 풀지는 못했다.
 * 풀이를 몇가지 본 후 이해하고 다시 풀어보았다.
 * 처음부터 이런 풀이를 바로 떠올릴 수 있을까?
 * dfs 를 써야 할지도 떠올리지 못했다.
 * dfs 를 쓰면 된다는걸 알아도 이 문제를 풀기위한
 * 설계 구조를 어떻게 잡아나갈지 감이 오지 않았다.
 */
