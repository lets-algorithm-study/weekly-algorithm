// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  const canSayArr = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  babbling.forEach(item => {
    canSayArr.forEach(word => {
      item = item.replace(word, ' ');
    });

    if (item.trim().length === 0) {
      answer++;
    }
  });

  return answer;
}

solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']);
