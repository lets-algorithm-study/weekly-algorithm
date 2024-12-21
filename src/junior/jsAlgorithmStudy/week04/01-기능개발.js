// 배포마다 몇개의 기능이 배포되는지 구하기

// 1. 최종 결과를 담을 result 배열을 선언한다.
// 2. 각 작업이 완료되기까지 필요한 '일수'를 계산한다.
// 2-1. 작업 진행도를 돌면서 각 작업의 완료까지 필요한 날을 days 배열에 저장한다.
// 3. 첫번째 작업 날짜를 max (완료 예상 날짜)에 저장한다.
// 4. 현재 그룹의 작업 수를 count에 저장한다.
// 5. days(작업 완료까지 필요한 날) 배열을 돌면서 현재 작업 완료 예정 날짜가 max보다 작거나 같은 날짜가 나오면 count를 증가시킨다.
// 5-1. 아니면, result 배열에 count를 넣고 max를 해당 날짜로 바꾼다. count를 1로 초기화 한다.
// 6. result 배열에 count를 넣는다.
// 7. result 출력.

function solution(progresses, speeds) {
  const result = [];
  const days = progresses.map((progress, index) =>
    // 100 - 현재 진행도 / 속도 구하고 올림처리.
    Math.ceil((100 - progress) / speeds[index])
  );
  let max = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= max) {
      count++;
    } else {
      result.push(count);
      max = days[i];
      count = 1;
    }
  }

  result.push(count);

  return result;
}

console.log('👉', solution([93, 30, 55], [1, 30, 5])); // [2, 1]
