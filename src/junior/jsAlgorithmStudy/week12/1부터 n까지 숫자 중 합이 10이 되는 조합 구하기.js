// 숫자들을 중복 없이 선택해 합이 10이 되는 모든 조합을 찾아 반환하기

// 1. 결과물을 담을 배열을 만든다.
// 2. 유망함수의 조건은 조합한 숫자의 합이 10이되면 백트래킹.
// 3. start부터 N까지 반복문을 돌면서 조합을 만든다.
// 4. sum + i가 10보다 작거나 같으면 백트래킹을 호출한다.
// 5. 백트래킹 함수에서는 sum이 10이 되면 result에 push한다.

function solution(N) {
  const result = [];

  function backtrack(sum, selectedNums, start) {
    // 유망함수
    if (sum === 10) {
      result.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  // 초기상태
  backtrack(0, [], 1);
  return result;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));

/* [ [ 1, 2, 3, 4 ], [ 1, 4, 5 ], [ 2, 3, 5 ] ]
[]
[
  [ 1, 2, 3, 4 ],
  [ 1, 2, 7 ],
  [ 1, 3, 6 ],
  [ 1, 4, 5 ],
  [ 2, 3, 5 ],
  [ 3, 7 ],
  [ 4, 6 ] */
