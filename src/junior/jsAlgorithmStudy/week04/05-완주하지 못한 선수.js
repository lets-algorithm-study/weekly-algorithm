// 완주하지 못한 선수 이름 구하기

// participant: 참가자들의 이름 배열
// completion: 완주한 사람들의 이름 배열

// 1. 각 참가자의 이름과 참가 횟수를 저장하기 위한 해시 테이블 역할을 하는 배열을 만든다.
// 2. 참가자들의 이름을 돌면서, obj에 현재 이름(p)가 있으면, obj[p]에 1을 더하고, 없으면 1로 초기화한다.
// 3. 완주자들의 이름을 돌면서, obj[c]에 1을 뺀다.
// 4. obj를 돌면서, 0보다 큰 값이 있으면 해당 이름을 반환한다.

function solution(participant, completion) {
  const obj = [];

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
