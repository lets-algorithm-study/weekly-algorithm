// 1. 바구니 역할을 하는 배열을 초기화.
// 2. 터뜨려서 사라진 인형의 개수를 저장할 변수 초기화.
// 3. moves 배열을 순회하며 각 크레인의 움직임을 처리한다.
// 4. 각 열에서 가장 위에 있는 인형을 찾기 위해 보드의 행을 돌면서 확인.
// 5. 해당 칸에 인형이 있을 경우에만 처리.
// 6. 바구니의 맨 위에 있는 인형과 같다면, 바구니에서 인형 제거. 사라진 인형 개수를 2 증가. 보드에서 해당 인형 제거. 해당 크레인 동작 종료시킨다.
// 7. 다르다면, 인형을 바구니에 추가. 보드에서 해당 인형 제거. 해당 크레인 동작 종료시킨다.
// 8. 최종적으로 터뜨린 인형의 총 개수를 반환한다.

function solution(board, moves) {
  let bucket = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] != 0) {
        if (bucket[bucket.length - 1] === board[j][moves[i] - 1]) {
          bucket.pop();
          answer += 2;
          board[j][moves[i] - 1] = 0;
          break;
        } else {
          bucket.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
    }
  }
  return answer; // 8. 최종적으로 터뜨린 인형의 총 개수를 반환.
}
