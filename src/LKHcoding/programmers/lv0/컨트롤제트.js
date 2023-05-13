// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let splitedArr = s.split(' ');
  const stack = [];

  splitedArr.forEach(item => {
    if (item === 'Z') {
      stack.pop();
    } else {
      stack.push(+item);
    }
  });

  return stack.reduce((acc, crr) => acc + crr, 0);

  // let splitArr = s.split(' ').map(item => +item);
  //
  // splitArr.forEach((item, idx) => {
  //   if (isNaN(item)) {
  //     splitArr[idx - 1] = 0;
  //   }
  // });
  //
  // return splitArr.reduce((acc, crr) => {
  //   if (isNaN(crr)) {
  //     return acc;
  //   }
  //   return acc + crr;
  // }, 0);
}
