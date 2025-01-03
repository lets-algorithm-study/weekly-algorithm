// 미로를 빠져 나가려는데 걸리는 시간 구하기

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

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

const isValidMove = (ny, nx, n, m, maps) => {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
};

const appendToQueue = (ny, nx, k, time, visited, q) => {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
};

const solution = maps => {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') {
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }
      if (maps[i][j] === 'E') {
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop();

    if (y === endY && x === endX && k === 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      if (maps[ny][nx] === 'L') {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  return -1;
};

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
// 16
