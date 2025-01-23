input1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// answer 11

input3 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// answer 15

input2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

// answer -1

input4 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
];

// answer 17

// 깊이 우선 탐색
// 너비 우선 탐색

// 0은 벽
// 1은 길
// 최단 거리로 이동

class Move {
  constructor(x, y, distance) {
    this.x = x;
    this.y = y;
    this.distance = distance;
  }

  getPosition() {
    return [this.x, this.y];
  }

  getDistance() {
    return this.distance;
  }
}

const soultion = maps => {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const move = new Move(0, 0, 1); // 시작 위치도 카운트하므로 1부터 시작
  const queue = [move]; // 시작점을 큐에 넣고 시작
  visited[0][0] = true;

  // 상하좌우 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length > 0) {
    const current = queue.shift();
    const [x, y] = current.getPosition();
    const distance = current.getDistance();

    // 목표 지점 도달
    if (x === n - 1 && y === m - 1) {
      return distance;
    }

    // 현재 위치에서 상하좌우 4방향을 확인
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      console.log(nx, ny);

      // 맵 범위 내이고, 벽이 아니며, 방문하지 않은 곳
      if (
        nx >= 0 && // 1. x좌표가 맵 밖으로 벗어나지 않는지 체크 (음수 방지)
        nx < n && // 2. x좌표가 맵의 세로 크기를 넘지 않는지 체크
        ny >= 0 && // 3. y좌표가 맵 밖으로 벗어나지 않는지 체크 (음수 방지)
        ny < m && // 4. y좌표가 맵의 가로 크기를 넘지 않는지 체크
        maps[nx][ny] === 1 && // 5. 해당 위치가 이동 가능한 길인지 체크 (1은 길, 0은 벽)
        !visited[nx][ny] // 6. 아직 방문하지 않은 위치인지 체크
      ) {
        visited[nx][ny] = true; // 7. 해당 위치를 방문했다고 표시
        queue.push(new Move(nx, ny, distance + 1)); // 8. 새로운 위치와 거리를 큐에 추가
      }
    }
  }
  console.log('--------------------------------ß');
  return -1; // 도달할 수 없는 경우
};

// [1, 0, 1, 1, 1]  <- nx=0, ny=1이 유효한지 확인
// [1, 0, 1, 0, 1]
// [1, 0, 1, 1, 1]
// [1, 1, 1, 0, 1]
// [0, 0, 0, 0, 1]

console.log(soultion(input1));
console.log(soultion(input2));
console.log(soultion(input3));
console.log(soultion(input4));
