function solution(dirs) {
  // 이동 방향에 따른 좌표 변화 정의
  let move = {
    L: [-1, 0], // 왼쪽: x축 -1
    R: [1, 0], // 오른쪽: x축 +1
    U: [0, 1], // 위쪽: y축 +1
    D: [0, -1], // 아래쪽: y축 -1
  };

  // 현재 위치 초기화 (시작점은 [0, 0])
  let now = [0, 0];

  // 방문 경로를 저장할 Set (중복 제거를 위해 사용)
  let route = new Set();

  // 주어진 명령어 문자열 순회
  for (let dir of dirs) {
    // 현재 위치에서 이동 방향에 따른 새로운 좌표 계산
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    // 경계값 확인 (좌표가 -5 ~ 5 사이를 벗어나면 무시)
    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    // 이동 경로를 문자열 형태로 저장 (현재 위치 -> 다음 위치)
    route.add('' + now[0] + now[1] + nowX + nowY);
    // 반대 방향 경로도 저장 (다음 위치 -> 현재 위치)
    route.add('' + nowX + nowY + now[0] + now[1]);

    // 현재 위치를 새로운 위치로 업데이트
    now = [nowX, nowY];
  }

  // 방문한 고유 경로의 수를 반환 (양방향 경로 저장했으므로 2로 나눔)
  return route.size / 2;
}

console.log(solution('ULURRDLLU')); // 7
