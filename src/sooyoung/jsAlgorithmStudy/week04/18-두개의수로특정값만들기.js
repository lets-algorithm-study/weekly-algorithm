// n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 이 중에서 합이 target인 두수가
// arr에 있는지 찾고, 잇으면 true를 반환하고, 없으면 false를 반환하시오.

// 제약조건
// n은 2이상 10000이하이다.
// arr[i]는 1이상 100000이하이다.
// arr의 원소 중 중복되는 원소는 없다.
// target은 1이상 20000이하의 자연수입니다..

// 입출력 예
// [1, 2, 3, 4, 5], 8 => true
// [1, 2, 3, 4, 5], 100 => false

function solution(arr, target) {
  let answer = false;
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      answer = true;
      break;
    }
    obj[arr[i]] = true;
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 8)); // true
