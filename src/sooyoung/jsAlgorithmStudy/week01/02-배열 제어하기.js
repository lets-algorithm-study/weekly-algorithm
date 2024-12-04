// 정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 함수를 작성하세요.

// 제약조건
// 1. 배열의 길이는 2 이상 1000 이하입니다.
// 2. 배열의 원소는 -100000 이상 100000 이하의 정수입니다.

// 예시
// [4,2,2,1,3,4] => [4,3,2,1]

function removeDuplicateAndSort(arr) {
  const set = new Set(arr);
  return Array.from(set).sort((a, b) => b - a);
}

