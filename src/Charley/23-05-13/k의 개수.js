https://school.programmers.co.kr/learn/courses/30/lessons/120887

const solution = (i, j, k) => {
  let result = 0;
  for (let num = i; num <= j; num++) {
    if (String(num).includes(String(k))) {
      const double = String(num).split('');
      for (let j = 0; j < double.length; j++) {
        if (double[j] === String(k)) {
          result++
        }
      }
    }
  }
  return result
}