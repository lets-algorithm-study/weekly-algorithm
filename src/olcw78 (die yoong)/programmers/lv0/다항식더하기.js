// https://school.programmers.co.kr/learn/courses/30/lessons/120863#qna
function solution(p) {
  p = p.split(' ').filter(ch => ch !== '+');

  let xCount = 0;
  let acc = 0;

  for (let i = 0; i < p.length; ++i) {
    const cur = p[i];

    if (cur.includes('x')) {
      if (cur.length === 1) {
        ++xCount;
      } else {
        const spl = cur.split('');
        spl.pop();
        xCount += Number(spl.join(''));
      }
    } else {
      acc += Number(cur);
    }
  }

  if (xCount === 0 && acc === 0) return '';
  if (xCount === 0 && acc !== 0) return `${acc}`;
  if (xCount === 1 && acc === 0) return `x`;
  if (xCount === 1 && acc !== 0) return `x + ${acc}`;
  if (xCount > 1 && acc === 0) return `${xCount}x`;
  if (xCount > 1 && acc !== 0) return `${xCount}x + ${acc}`;
}
