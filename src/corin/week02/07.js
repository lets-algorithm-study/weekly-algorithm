// 07 방문 길이

//실수하기 쉬운 부분
//1. 중복 경로는 최종 길이에 포함하지 않음
//2. 음수 좌표를 포함

//중간에 데이터를 삽입할 일이 많다면 배열은 비효율적.다른 방법 생각해야 함

function isValidMove(nx, ny){
  //좌표평면을 벗어나는지 체크하는 함수
  return nx >= -5 && nx <=5 && ny >= -5 && ny <=5;
}

function updateLocation(x, y, dir) {
  //명령어를 통해 다음 좌표 결정
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R" :
      return [x + 1, y];
    case "L" :
      return [x - 1, y];
  }
}

function solution(dirs){
  let x = 0;
  let y = 0;

  const visited = new Set(); //겹치는 좌표는 1개로 처리하기 위함
  for (const dir of dirs){
    //주어진 명령어로 움직이면서 좌표 저장
    const [nx, ny] = updateLocation(x, y, dir);

    if(!isValidMove(nx, ny)){
      //벗어난 좌표는 인정하지 않음
      continue;
    }
    
    //A에서 B로 간 경우 B에서 A도 추가해야 함(총 경로의 개수는 방향성이 없음)
    visited.add(`${x}${y}${nx}${nx}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x,y] = [nx, ny]; //좌표를 이동했으므로 업데이트\
  }
  
  return visited.size / 2;
}