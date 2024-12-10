function solution(s) {
  let answer = -1;
  let sArr = [...s];
  let stack = [];
  let length = sArr.length;

  for (let i = 0; i < length; i++) {
    let tmpPop = sArr.pop();
    if (stack.at(-1) === tmpPop) {
      stack.pop();
    } else {
      stack.push(tmpPop);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
