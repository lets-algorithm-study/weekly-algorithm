// https://school.programmers.co.kr/learn/courses/30/lessons/120895
// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  const str = my_string.split('');
  
  // array.prototype.splice(start, [deleteCount, ...[item1);
  str.splice(num1, 1, my_string[num2]);
  str.splice(num2, 1, my_string[num1]);

  return str.join("");
}