// https://school.programmers.co.kr/learn/courses/30/lessons/120844
function solution(numbers, direction) {
  const len = numbers.length;

  switch (direction) {
    case "right":
    {
      const last = numbers[len - 1];
      for (let i = len - 1; i >= 1; --i) {
        numbers[i] = numbers[i - 1];
      }
      numbers[0] = last;
      break;
    }

    case "left":
    {
      const first = numbers[0];
      for (let i = 0; i < len; ++i) {
        numbers[i] = numbers[i + 1];
      }
      numbers[len - 1] = first;
      break;
    }
  }

  return numbers;
}

// other ppl
function solution(numbers, direction) {
  const res = numbers.slice();

  // js array 의 동적배열 속성을 잘 활용함..
  switch (direction) {
    case "right": { res.unshift(res.pop()); } break;
    case "left": { res.push(res.shift()); } break;
  }

  return res;
}