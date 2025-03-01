// https://school.programmers.co.kr/learn/courses/30/lessons/120895
function solution(my_string, num1, num2) {
  my_string = [...my_string];
  [my_string[num2], my_string[num1]] = [my_string[num1], my_string[num2]];

  return my_string.join('');

  // const tmpStr = [...my_string];
  // const answer = [...my_string];
  // answer.splice(num1, 1, tmpStr[num2])
  // answer.splice(num2, 1, tmpStr[num1]);
  // return answer.join('')
}
