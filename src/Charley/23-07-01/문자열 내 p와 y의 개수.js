// https://school.programmers.co.kr/learn/courses/30/lessons/12916

const solution = (s) => {
  let n = s.toUpperCase().split("");
  console.log(n);
  let c = 0;
  n.map((data) => {
    if (data === "P") {
      if (n.indexOf(data) !== -1) {
        c++;
      }
    }
    if (data === "Y") {
      if (n.indexOf(data) !== -1) {
        c--;
      }
    }
  });
  if (c === 0) {
    return true;
  } else {
    return false;
  }
}