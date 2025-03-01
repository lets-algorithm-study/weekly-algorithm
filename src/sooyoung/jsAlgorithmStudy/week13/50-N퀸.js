// 가로 , 세로 길이가 n 인 정사각형 체스판이 있습니다. 체스판 위의 n 개의 이 서로를 공격할 수 없
// 도록 배치하고 싶습니다. 체스판의 길이 n 이 주어질 때 조건을 만족하는 퀸 배치 수를 반환하는
// solution() 함수를 완성하세요.
//   입출력의 예
// n
// 4
// result

const solution = n => {
  let count = 0;
  const cols = Array(n).fill(false);
  const diags1 = Array(2 * n - 1).fill(false);
  const diags2 = Array(2 * n - 1).fill(false);

  const backtrack = row => {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      const diag1 = row + col;
      const diag2 = n - 1 + row - col;

      if (cols[col] || diags1[diag1] || diags2[diag2]) {
        continue;
      }

      cols[col] = diags1[diag1] = diags2[diag2] = true;
      backtrack(row + 1);
      cols[col] = diags1[diag1] = diags2[diag2] = false;
    }
  };

  backtrack(0);
  return count;
};

function search(n, y, width, diagonal1, diagonal2) {
  let answer = 0;

  if (y === n) {
    answer += 1;
  } else {
    for (let i = 0; i < n; i++) {
      if (width[i] || diagonal1[i + y] || diagonal2[i - y + n]) {
        continue;
      }

      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;

      answer += search(n, y + 1, width, diagonal1, diagonal2);

      width[i] = diagonal1[i + y] = diagonal2[i - y + n] = false;
    }
  }
  return answer;
}

function solution(n) {
  const answer = search(
    n,
    0,
    Array(n).fill(false),
    Array(n * 2).fill(false),
    Array(n * 2).fill(false),
  );
  return answer;
}
