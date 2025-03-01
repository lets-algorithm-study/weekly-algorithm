// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function answer(record) {
  // uid 와 닉네임 관리할 맵
  const map = new Map();

  for (const item of record) {
    const [order, uid, nickName] = item.split(' ');

    if (order === 'Enter') {
      // 입장시 닉네임 셋
      map.set(uid, nickName);
      continue;
    }

    if (order === 'Change') {
      // 닉네임 변경시
      map.set(uid, nickName);
    }
  }

  return record
    .map(item => {
      const [order, uid, nickName] = item.split(' ');

      if (order === 'Enter') {
        return `${map.get(uid)}님이 들어왔습니다.`;
      }
      if (order === 'Leave') {
        return `${map.get(uid)}님이 나갔습니다.`;
      }
    })
    .filter(Boolean);
}

console.log(
  answer([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
