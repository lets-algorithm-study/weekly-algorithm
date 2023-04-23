// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
// return 하도록 solution 함수를 완성해보세요.
// in > [1, 2, 3, 4, 5] 1 3
// out > [2, 3, 4]
function solution(numbers, num1, num2) {
  // const answer = [];
  // for (let i = num1; i <= num2; ++i) {
  //     answer.push(numbers[i]);
  // }
  // return answer;

  return numbers.slice(num1, num2 + 1);
}