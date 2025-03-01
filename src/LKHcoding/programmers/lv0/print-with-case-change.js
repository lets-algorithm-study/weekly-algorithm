// https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=javascript
function solution(str) {
  const littleLetters = 'abcdefghijklmnopqrstubwxyz';
  const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let answer = '';

  str.split('').forEach(item => {
    const isLittle = littleLetters.includes(item);
    const charIdx = (isLittle ? littleLetters : bigLetters)
      .split('')
      .findIndex(char => char === item);
    answer += isLittle ? bigLetters[charIdx] : littleLetters[charIdx];
  });

  console.log(answer);
}

// solution('aBcDeFg'); // AbCdEfG

function solution2(str) {
  return str
    .split('')
    .map(item => {
      const isLowerCase = item === item.toLowerCase();
      return isLowerCase ? item.toUpperCase() : item.toLowerCase();
    })
    .join('');
}

console.log(solution2('aBcDeFg')); // AbCdEfG
