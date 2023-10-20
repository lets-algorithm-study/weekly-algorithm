/*
* [제목] 1844_게임맵최단거리

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/1844

* [문제] 

*/

/*
    [선언]
    1. 방문해야할 노드들 큐 선언
    2. 방문했는지 여부 판별 큐 선언
    3. 최단 거리 결과 값 선언

    [알고리즘]
    0. 처음 순환일때, 다음 방문해야 노드에 첫번째 위치값 입력
    1. 다음 방문해야 노드들 큐에 값이 없을 경우 반복 종료 > 다음 방문해야할 노드들이 없는 경우 (최종 경로까지 이동하지 못한 경우)
    2. 다음 방문해야 노드들 큐를 하나씩 순회하면서 그 다음 방문해야할 노드들을 추가 (큐 순환 전, 최단 거리 결과 카운트 증가)
    3. 순환할때, 현재 이동한 거리는 flag off해서 다음 방문해야할 노드에 추가하지 않도록 하기
    4. 최종 경로가 먼저 도착한 루트 노드가 있으면 종료 
*/

// 내가 푼 solution

function solution(maps) {
  let result = 0;

  let ylen = maps.length;
  let xlen = maps[0].length;

  // 다음 이동해야할 큐 생성
  let needVisitQueue = [{ x: 0, y: 0 }];

  while (needVisitQueue.length) {
    result++;

    // 변수로 선언 안하고 반복문 조건으로 넣으면 더 돈다.
    const size = needVisitQueue.length;

    for (let i = 0; i < size; i++) {
      const { x, y } = needVisitQueue.shift();

      // 다음 이동 경로가 도착지였다면 종료
      if (x === xlen - 1 && y === ylen - 1) return result;

      maps[y][x] = 0;

      // 우측으로 이동할 수 있는지
      if (x + 1 < xlen && maps[y][x + 1] === 1) {
        needVisitQueue.push({ x: x + 1, y });
      }

      // 아래로 이동할 수 있는지
      if (y + 1 < ylen && maps[y + 1][x] === 1) {
        needVisitQueue.push({ x, y: y + 1 });
      }

      // 좌측으로 이동할 수 있는지
      if (x > 0 && maps[y][x - 1] === 1) {
        needVisitQueue.push({ x: x - 1, y });
      }

      // 위로 이동할 수 있는지
      if (y > 0 && maps[y - 1][x] === 1) {
        needVisitQueue.push({ x, y: y - 1 });
      }
    }
  }

  return -1;
}

// 다른 사람 solution
function solution1(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  // 다음 번에 방문해될 노드들
  var queue = [[0, 0]];

  // 방문 했는지 여부 판별
  var visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  );

  console.log(visited);

  var result = 0;
  let index = 0;

  // 다음 방문해야 노드들이 없으면 종료
  while (queue.length) {
    result++;

    var size = queue.length;

    // 방문해야할 노드들을 조건을 확인하고 다음에 방문해야할 노드들을 queue에 넣음
    for (var i = 0; i < size; i++) {
      var point = queue.shift();
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue;

      // 돌아 오는 것을 방지
      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1) queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1) queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }

    console.log(`index: ${index}`);
    console.log(`result: ${result}`);
    console.log(queue);
    index += 1;
  }

  return -1;
}
