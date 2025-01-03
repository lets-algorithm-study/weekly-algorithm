// https://school.programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  // parent 오브젝트 key는 enroll의 노드, value는 referral의 노드로 구성됨
  const parent = {};

  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // total 오브젝트 생성 및 초기화
  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  // seller 배열과 amount 배열을 이용하여 이익 분배
  for (let i = 0; i < seller.length; i++) {
    // 판매자가 판매한 총 금액 계산
    // 개당 100원
    let money = amount[i] * 100;
    let curName = seller[i];

    // 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
    while (money > 0 && curName !== '-') {
      // 현재 판매자가 받을 금액 계산(10%를 제외한 금액)
      total[curName] += money - Math.floor(money / 10);

      // 추천인으로 거슬러 올라가서 다시 계산
      curName = parent[curName];
      money = Math.floor(money / 10);
    }
  }

  // enroll 배열의 모든 노드에 대해 해당하는 이익을 배열로 반환
  return enroll.map(name => total[name]);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);

function answer(enroll, referral, seller, amount) {
  // profits: 각 판매원의 최종 수익을 저장하는 객체
  const profits = Object.fromEntries(enroll.map(name => [name, 0]));
  /** ㄴ> 같은 의미의 코드임
   * const profits = enroll.reduce((acc, name) => {
   *     acc[name] = 0;
   *     return acc;
   * }, {}); */

  // refs: 각 판매원의 추천인 정보를 저장하는 객체
  const refs = Object.fromEntries(enroll.map((name, i) => [name, referral[i]]));

  // 각 판매 기록에 대해 수익을 분배
  seller.forEach((name, i) => {
    // 판매 금액 계산 (개당 100원)
    let money = amount[i] * 100;
    // 추천인 체인을 따라 수익 분배
    while (money > 0 && name !== '-') {
      // 추천인에게 분배할 금액 계산 (10%)
      const share = Math.trunc(money / 10);

      // 현재 판매원의 수익 추가
      profits[name] += money - share;

      // 다음 추천인으로 이동
      name = refs[name];
      money = share;
    }
  });

  // 각 판매원의 최종 수익을 배열로 반환
  return enroll.map(name => profits[name]);
}

console.log(
  answer(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10]
  )
);
