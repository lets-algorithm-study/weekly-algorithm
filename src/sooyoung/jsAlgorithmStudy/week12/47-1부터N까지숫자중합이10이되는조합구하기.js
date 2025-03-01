// 정수 N을 입력받아 1부터 N까지의 숫자 중에서 합이 10이 되는 조합을 배열로 반환하는 solution() 함수를 작성하라.

const solution = N => {
  const result = [];
  const backtrack = (sum, selectedNums, start) => {
    if (sum === 10) {
      result.push([...selectedNums]);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums, i + 1);
      }
    }
  };

  backtrack(0, [], 1);
  return result;
};
