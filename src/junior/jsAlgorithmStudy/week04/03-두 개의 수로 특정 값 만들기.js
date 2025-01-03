// arr에 합이 target이 되는 두 개의 수가 있는지 확인하라.
// 1. arr 정수 배열, K 정수
// 2. 크기가 k+1인 배열을 만들고 0으로 초기화
// 3. 정수 배열을 돌면서, 현재 값이 k 이하면, hashtable에 1로 표시
// 4. hashtable을 반환

// 1. arr 정수 배열, target 목표 합
// 2. countSort 함수를 통해 hashtable을 만든다.
// 3. 정수 배열을 돌면서, 현재 숫자(num)에 대해 complement = target - num을 계산한다.
// 4. 민약 complement 이 num이랑 같지 않다.(중복제거)
// 5. complement가 0 이상이고, target 이하이고, hashtable에 complement가 1로 표시되어 있다면, true를 반환한다.
// 6. 다 만족하지 않으면 false

function countSort(arr, k) {
  let hashtable = new Array(k + 1).fill(0);

  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);

  for (const num of arr) {
    const complement = target - num;

    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
