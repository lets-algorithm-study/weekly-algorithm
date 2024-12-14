// N명의 사람이 원형태로 서 있습니다. 각 사람은 1부터 N까지 번호표를 갖고 있습니다.
// 그리고 임의 숫자 k가 주어졌을 때 다음과 같이 사람을 없앱니다.
// 1번 사람부터 순서대로 번호를 세고 k번째 사람을 제거합니다
// 이 과정을 반복하면서 N명의 사람이 모두 제거될 때까지 계속합니다.
// N과 k가 주어졌을 때 제거되는 순서를 출력하는 함수를 작성하세요.

// 입출력의 예
// 입력: 5, 2
// 출력: 2, 4, 1, 5, 3
const solution = (n, k) => {
  let numArr = Array.from({ length: n }, (v, i) => i + 1);
  let curIndex = k;
  let result = [];
  let indexArr = [];
  for (let i = 0; i < n; i++) {
    if (indexArr.includes(curIndex)) {
      curIndex++;
      if (curIndex > n) {
        curIndex = curIndex % n;
      }
    }
    indexArr.push(curIndex);
    curIndex += k;
    if (curIndex > n) {
      curIndex = curIndex % n;
    }
    result.push(numArr[curIndex]);
  }

  return result.at(-1);
};

console.log(solution(5, 2)); // 2, 4, 1, 5, 3
console.log(solution(7, 3)); // 3, 6, 2, 7, 5, 1, 4
