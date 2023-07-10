// https://school.programmers.co.kr/learn/courses/30/lessons/12918

const solution = (s) => {
  let n = s.split("");
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let c = 0;
  if (n.length !== 4 && n.length !== 6) {
    return false;
  }
  n.map((data) => {
    if (num.indexOf(data) === -1) {
      c++;
    }
  });
  return c === 0 ? true : false;
}