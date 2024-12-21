// goal 배열을 순서대로 만들 수 있으면 'Yes', 아니면 'No'를 나타내기.

// 1. goal 배열의 길이를 변수 length에 저장한다.
// 2. goal 배열을 돌면서 goal[0] card1[0]의 첫번째 요소와 비교한다.
// 2-1. 같으면, goal과 card1의 첫번째 요소를 제거한다.
// 3. goal[0] 과 card2[0]의 첫번째 요소와 비교한다.
// 3-1. 같으면, goal과 card2의 첫번째 요소를 제거한다.
// 4. goal[0]이 undefined면 'Yes'를 반환한다.
// 5. 'No'를 반환한다.

function solution(cards1, cards2, goal) {
  const length = goal.length;

  for (let i = 0; i < length; i++) {
    if (goal[0] === cards1[0]) {
      goal.shift();
      cards1.shift();
    }

    if (goal[0] === cards2[0]) {
      goal.shift();
      cards2.shift();
    }
  }

  if (goal[0] === undefined) {
    return 'Yes';
  }

  return 'No';
}

console.log(
  '👉',
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
); // Yes
