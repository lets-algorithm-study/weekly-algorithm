/*
* [제목] 키패드 누르기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

* [문제] 
    2020 카카오 인턴십
*/

function getPos() {
  let arr = new Array(10).fill(0);

  const pos0 = {
    x: 1,
    y: 3,
  };

  return [
    pos0,
    ...arr.map((_, i) => {
      return {
        x: i % 3,
        y: Math.floor(i / 3),
      };
    }),
  ];
}

function solution(numbers, hand) {
  var answer = '';

  const pos = getPos();

  let leftPos = {
    x: 0,
    y: 3,
  };

  let rightPos = {
    x: 2,
    y: 3,
  };

  numbers.forEach(item => {
    if (item % 3 === 1) {
      // 원소가 1, 4, 7 일때
      answer += 'L';
      leftPos = pos[item];

      // LRL RRLLLRRR
    } else if (item % 3 === 0 && item !== 0) {
      // 원소가 3, 6, 9 일때
      answer += 'R';
      rightPos = pos[item];
    } else {
      // 가운데 줄일 때, 거리 비교
      let leftLength = Math.abs(pos[item].x - leftPos.x) + Math.abs(pos[item].y - leftPos.y);
      let rightLength =
        Math.abs(pos[item].x - rightPos.x) + Math.abs(pos[item].y - rightPos.y);

      // 같은 거리면 hand에 따른 결과 반환
      if (leftLength === rightLength) {
        if (hand === 'left') {
          answer += 'L';
          leftPos = pos[item];
        } else {
          answer += 'R';
          rightPos = pos[item];
        }
      } else {
        // 작은 거리의 손이 이동
        if (leftLength < rightLength) {
          answer += 'L';
          leftPos = pos[item];
        } else {
          answer += 'R';
          rightPos = pos[item];
        }
      }
    }
  });
  return answer;
}
