function answer(arr, target) {
  const map = new Map();
  arr.forEach(item => {
    map.set(item, true);
  });

  for (const [key, value] of map.entries()) {
    if (target - key !== key && map.get(target - key) === true) {
      return true;
    }
  }

  return false;
}

console.log(answer([1, 2, 3, 4, 8], 6));
console.log(answer([2, 3, 5, 9], 10));

// 해시테이블 직접 관리하는 방식
function countSort(arr, k) {
  // 해시 테이블 생성 및 초기화
  const hashTable = new Array(k + 1).fill(0);
  for (const num of arr) {
    // 현재 원소의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashTable[num] = 1;
    }
  }

  return hashTable;
}

function solution(arr, target) {
  const hashTable = countSort(arr, target);

  for (const num of arr) {
    const complement = target - num;
    // target 에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashTable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}
