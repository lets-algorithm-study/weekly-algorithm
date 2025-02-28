// 정수 배열을 정렬해서 반환하는 solution( ) 함수를 완성하세요.

// 제약조건
// • 정수배열의길이는2이상105이하입니다.
// • 정수배열의각데이터값은- 100,000이상 100,000이하입니다.

function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
