// https://school.programmers.co.kr/learn/courses/30/lessons/120853
function solution(s) {
  const tokens = s.split(" ").map((token) => Number(token));
  console.log(tokens);

  let last = undefined;
  let acc = 0;
  for (const n of tokens) {
    if (Number.isNaN(n)) {
      acc -= last;
      continue;
    }

    acc += n;
    last = n;
  }

  return acc;
}

// 다른 풀이 - 스택을 응용.
function solution(s) {
  const stack = []

  s.split(' ').forEach((target) => {
    if(target === 'Z') stack.pop();
    else stack.push(+target)
  })

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
