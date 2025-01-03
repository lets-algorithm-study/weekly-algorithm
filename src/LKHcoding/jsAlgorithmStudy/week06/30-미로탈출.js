// https://school.programmers.co.kr/learn/courses/30/lessons/159993

// 재풀이 필요
function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  // 시작점(S), 레버(L), 출구(E) 위치 찾기
  let start, lever, exit;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      if (maps[i][j] === 'L') lever = [i, j];
      if (maps[i][j] === 'E') exit = [i, j];
    }
  }

  // 두 지점 사이의 최단 거리를 찾는 BFS 함수 (너비 우선 탐색)
  function findShortestPath(from, to) {
    // from, to 에는 좌표값 - start, lever, exit 값이 들어올 예정
    const queue = [[...from, 0]]; // [row, col, 이동한 거리]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[from[0]][from[1]] = true;

    // 상하좌우 이동 방향
    const moves = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      const [row, col, distance] = queue.shift();

      // 목적지에 도달했다면 이동 거리 반환
      if (row === to[0] && col === to[1]) {
        return distance;
      }

      // 네 방향으로 이동 시도
      // d는 델타 (변화량)
      for (const [dRow, dCol] of moves) {
        const nextRow = row + dRow;
        const nextCol = col + dCol;

        // 이동 가능한 조건 체크
        const canMove =
          // 0보다 커야하고, 맵을 벗어나면 안됨
          nextRow >= 0 &&
          nextRow < rows &&
          nextCol >= 0 &&
          nextCol < cols &&
          // 방문한 적 없어야됨
          !visited[nextRow][nextCol] &&
          // 벽으로 갈 수 없음
          maps[nextRow][nextCol] !== 'X';

        if (canMove) {
          visited[nextRow][nextCol] = true;
          queue.push([nextRow, nextCol, distance + 1]);
        }
      }
    }

    return -1; // 도달할 수 없는 경우
  }

  // 1. 시작점 -> 레버까지의 최단 거리
  const timeToLever = findShortestPath(start, lever);
  if (timeToLever === -1) return -1;

  // 2. 레버 -> 출구까지의 최단 거리
  const timeToExit = findShortestPath(lever, exit);
  if (timeToExit === -1) return -1;

  // 총 이동 시간 반환
  return timeToLever + timeToExit;
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
