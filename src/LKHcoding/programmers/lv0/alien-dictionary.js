// https://school.programmers.co.kr/learn/courses/30/lessons/120869
function solution(spell, dic) {
  const sortedSpell = spell.sort().join('');
  let answer = 2;

  dic.forEach(item => {
    const sortedItem = item.split('').sort().join('');
    if (sortedItem === sortedSpell) {
      answer = 1;
    }
  });

  return answer;
}
