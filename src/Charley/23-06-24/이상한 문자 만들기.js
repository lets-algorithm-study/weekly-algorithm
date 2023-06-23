// https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 공백을 포함한 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 변환하는 값
const solution = (s) => {
  return s.split(" ").map(el => el.split('').map((el, index) => index % 2 == 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ');
}