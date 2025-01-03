const solution = (enroll, referral, seller, amount) => {
  // parent 오브젝트 key는 enroll, value는 referral
  let parent = {};

  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // total 오브젝트 생성 및 초기화
  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  // seller 배열과 amount 배열을 순회하며 수익 분배
  for (let i = 0; i < seller.length; i++) {
    let name = seller[i];
    let money = amount[i] * 100;

    // 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
    while (money > 0 && name !== '-') {
      // 현재 판매자가 받을 금액 계산
      total[name] += money - Math.floor(money / 10);
      name = parent[name];
      // 10%를 제외한 금액
      money = Math.floor(money / 10);
    }
  }
  return enroll.map(name => total[name]);
};

const enroll = ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'];
const referral = ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'];
const seller = ['young', 'john', 'tod', 'emily', 'mary'];
const amount = [12, 4, 2, 5, 10];
console.log(solution(enroll, referral, seller, amount));

/** [
  360,  958, 108,
    0,  450,  18,
  180, 1080
]
**/
