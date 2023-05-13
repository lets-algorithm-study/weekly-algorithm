https://school.programmers.co.kr/learn/courses/30/lessons/120887

const solution = (i, j, k) => {
  let result = 0;
  for (i; i <= j; i++) {
    if (String(i).includes(String(k))) {
      // 11, 22, 333 처럼 하나의 값에 필요한 k의 값이 중복으로 보유한 경우
      for (let j = 0; j < i.length; j++) {
        if (double[j] === String(k)) {
          result++
        }
      }
    }
  }
  return result
}