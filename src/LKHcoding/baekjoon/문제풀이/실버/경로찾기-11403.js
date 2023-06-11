// 참고 - https://tesseractjh.tistory.com/194
// 이미지 참조 - https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=occidere&logNo=220818393375

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const graph = input.slice(1).map(line => line.split(' ').map(Number));

solutionDfs(N, graph);

function solutionDfs(N, graph) {
  const result = Array.from(Array(N), () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    dfs(graph, result[i], i);
  }

  console.log(result.map(item => item.join(' ')).join('\n'));
}

function dfs(graph, visited, node) {
  const n = graph[node].length;

  for (let next = 0; next < n; next++) {
    if (graph[node][next] === 1 && visited[next] === 0) {
      visited[next] = 1;
      dfs(graph, visited, next);
    }
  }
}

// -------------------------------------

function solutionDfsStack(N, graph) {
  const result = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    const visited = new Array(N).fill(0);
    dfsStack(graph, visited, i);
    result[i] = visited;
  }

  console.log(result.map(row => row.join(' ')).join('\n'));
}

// Stack을 이용한 DFS 함수
function dfsStack(graph, visited, node) {
  let stack = [node];

  while (stack.length > 0) {
    const node = stack.pop();

    for (let next = 0; next < visited.length; next++) {
      if (graph[node][next] === 1 && visited[next] === 0) {
        visited[next] = 1;
        stack.push(next);
      }
    }
  }
}

// -----------------------------------------

function solutionBfs(N, graph) {
  const result = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    const visited = new Array(N).fill(0);
    bfs(graph, visited, i);
    result[i] = visited;
  }

  console.log(result.map(row => row.join(' ')).join('\n'));
}

// BFS 함수
function bfs(graph, visited, startNode) {
  let queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();

    for (let nextNode = 0; nextNode < visited.length; nextNode++) {
      if (graph[node][nextNode] === 1 && visited[nextNode] === 0) {
        visited[nextNode] = 1;
        queue.push(nextNode);
      }
    }
  }
}
