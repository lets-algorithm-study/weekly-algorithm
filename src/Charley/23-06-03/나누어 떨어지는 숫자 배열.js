https://school.programmers.co.kr/learn/courses/30/lessons/12910

const solution = (n, m) => {
  let arr = [];
  n.map((data) => {
    if (data % m === 0) {
      arr.push(data);
    }
  });
  if (arr.length !== 0) {
    return arr.sort((a, b) => a - b);
  } else {
    return [-1];
  }
}