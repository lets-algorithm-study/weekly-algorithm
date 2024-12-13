// https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {
  // 삭제된 행의 인덱스를 저장하는 배열
  const deleted = [];

  // 연결 리스트에서 각 행 위아래의 행의 인덱스를 저장하는 배열
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 1)].map((_, i) => i + 1);

  // 현재 위치를 나타내는 인덱스
  k += 1;

  // 주어진 명령어(cmd) 배열 요소를 하나씩 처리
  for (const item of cmd) {
    // 현재 위치를 삭제하고 그 다음 위치로 이동
    if (item[0] === 'C') {
      deleted.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];

      k = n < down[k] ? up[k] : down[k];
    }

    // 가장 최근에 삭제된 행을 복원
    else if (item[0] === 'Z') {
      const restore = deleted.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    }

    // U 또는 D를 사용해 현재 위치를 위아래로 이동
    else {
      const [action, num] = item.split(' ');
      if (action === 'U') {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }

  // 삭제된 행의 위치에 'X'를, 그렇지 않은 행의 위치에 'O'를 포함하는 문자열 반환
  const answer = new Array(n).fill('O');
  for (const i of deleted) {
    answer[i - 1] = 'X';
  }

  return answer.join('');
}

function newSolution(n, k, cmd) {
  // 표의 행이 삭제될 때마다 해당 행 번호를 저장하는 스택
  // 나중에 'Z' 명령어로 복구할 때 사용
  const deletedStack = [];

  // 각 행의 이전/다음 위치를 저장하는 배열
  // 예: n=3일 때
  // prev: [-1, 0, 1, 2] (길이: n+1)
  // - 인덱스 0: 더미(-1), 1: A의 이전(0), 2: B의 이전(1), 3: C의 이전(2)
  const prev = [...new Array(n + 1)].map((_, i) => i - 1);

  // next: [1, 2, 3, 4] (길이: n+1)
  // - 인덱스 0: A의 다음(1), 1: B의 다음(2), 2: C의 다음(3), 3: 더미(4)
  const next = [...new Array(n + 1)].map((_, i) => i + 1);

  // 현재 선택된 행 번호 (문제의 인덱스는 0부터 시작하므로 1을 더해줌)
  let current = k + 1;

  // 각 명령어별 처리 함수를 객체로 관리
  const commands = {
    // 'C' (현재 행 삭제)
    C: () => {
      // 1. 현재 행 번호를 스택에 저장
      deletedStack.push(current);

      // 2. 현재 행의 이전과 다음 행 번호 알아내자
      const prevRow = prev[current]; // 현재 행의 이전 행
      const nextRow = next[current]; // 현재 행의 다음 행

      // 3. 현재 행을 제거하고 이전-다음 행 연결
      next[prevRow] = nextRow; // 이전 행의 다음을 다음 행으로
      prev[nextRow] = prevRow; // 다음 행의 이전을 이전 행으로

      // 4. 커서 이동
      // 마지막 행이 삭제된 경우(nextRow가 더미 테일보다 큼)
      // -> 이전 행으로 이동
      // 그 외의 경우 -> 다음 행으로 이동
      current = nextRow > n - 1 ? prevRow : nextRow;
    },

    // 'Z' (최근 삭제 행 복구)
    Z: () => {
      // 1. 가장 최근에 삭제된 행 번호를 스택에서 꺼냄
      const restoreRow = deletedStack.pop();

      // 2. 복구할 행의 이전과 다음 행 번호 확인
      const prevRow = prev[restoreRow];
      const nextRow = next[restoreRow];

      // 3. 복구할 행을 이전-다음 행과 다시 연결
      next[prevRow] = restoreRow; // 이전 행의 다음을 복구할 행으로
      prev[nextRow] = restoreRow; // 다음 행의 이전을 복구할 행으로
    },

    // 'U X' (현재 위치에서 X칸 위로 이동)
    U: x => {
      // prev 배열을 통해 X번 위로 이동
      for (let i = 0; i < x; i++) {
        current = prev[current];
      }
    },

    // 'D X' (현재 위치에서 X칸 아래로 이동)
    D: x => {
      // next 배열을 통해 X번 아래로 이동
      for (let i = 0; i < x; i++) {
        current = next[current];
      }
    },
  };

  // 모든 명령어 실행
  for (const command of cmd) {
    const [type, count] = command.split(' '); // 명령어 타입과 이동 횟수 분리
    commands[type](Number(count)); // 해당하는 명령어 함수 실행
  }

  // 최종 결과 문자열 생성
  const answer = Array(n).fill('O'); // 모든 행을 'O'로 초기화
  deletedStack.forEach(row => {
    answer[row - 1] = 'X'; // 삭제된 행만 'X'로 표시 (인덱스를 0부터로 조정)
  });

  return answer.join(''); // 배열을 문자열로 변환하여 반환
}

console.log(
  newSolution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'])
);
