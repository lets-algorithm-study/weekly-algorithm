// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 시간복잡도 체크
// wants -> n
// discount -> m
function answer(want, number, discount) {
  let result = 0;
  const wantObj = {};

  // O(n)
  want.forEach((item, idx) => {
    wantObj[item] = number[idx];
  });

  // O(m)
  for (let i = 0; i < discount.length; i++) {
    // O(n)
    const copiedObj = { ...wantObj };

    // O(10) -> O(1)
    for (let j = i; j < i + 10; j++) {
      const item = discount[j];

      if (Number.isNaN(+copiedObj[item])) {
        // 할인 받을 수 없는 케이스
        break;
      }

      copiedObj[item] -= 1;
    }

    // O(n)
    const values = Object.values(copiedObj);

    // O(n)
    if (values.every(item => item <= 0)) {
      result++;
    }
  }

  // 최종:
  //   O(n) + O(m * (n + 1 + n + n))
  // = O(n) + O(m * (3n + 1))
  // = O(n) + O(3mn + m)
  // = O(n + 3mn + m) => 점근법에 따라 n과 m 제거, 3mn 에서 3 제거
  // = O(mn)
  return result;
}

console.log(
  answer(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
