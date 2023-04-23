const general = 5;
const soldier = 3;

function solution(hp) {
  let answer = 0;


  let cnt = Math.trunc(hp / general);
  hp -= cnt * general;

  answer += cnt;
  if (hp <= 0) return answer;

  cnt = Math.trunc(hp / soldier);
  hp -= cnt * soldier;

  answer += cnt;
  if (hp <= 0) return answer;

  answer += hp;

  return answer;
}

solution(23);