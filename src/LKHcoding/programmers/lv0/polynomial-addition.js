// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const xArr = polynomial.split(' ').filter(item => item.includes('x'));
  const nonXNum = polynomial
    .split(' ')
    .filter(item => !item.includes('x') && !item.includes('+'))
    .reduce((acc, cur) => +acc + +cur, 0);

  const xNum = xArr.reduce((acc, cur) => {
    if (cur === 'x' || cur === '1x') {
      return acc + 1;
    }

    const num = +cur.split('x')[0];
    return acc + num;
  }, 0);

  const answer = [];

  if (xNum) {
    answer.push(xNum > 1 ? xNum + 'x' : 'x');
  }
  if (nonXNum) {
    answer.push(nonXNum);
  }

  return answer.join(' + ');
}
