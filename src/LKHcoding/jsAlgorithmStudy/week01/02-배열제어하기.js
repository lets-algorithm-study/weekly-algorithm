// 정수배열을하나받습니다.
// 배열의 중복값을 제거하고
// 배열데이터를 내림차순으로 정렬해서 반환하는 solution() 함수를 구현하세요.

function solution(arr) {
  const result = [...new Set(arr)].sort((a, b) => b - a);
  return result;
}

console.log(solution([4, 2, 2, 1, 3, 4])); // [ 4, 3, 2, 1 ]
