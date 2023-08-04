/*
* [제목] 카카오 1차 다트게임

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/17682

* [문제] 

*/
function solution(dartResult) {
  var answer = 0;

  const dartArray = dartResult.split('');

  let opt = {
    S: 1,
    D: 2,
    T: 3,
  };

  let score = [];

  // 결과 점수 배열 index
  let scoreIndex = -1;

  // i는 dataResult 인덱스
  let i = 0;
  while (i < dartResult.length) {
    // 잘라서 parseInt로 앞에 숫자만 빼기
    const tmp = dartResult.slice(i);

    const dart = parseInt(tmp);

    // parseInt로 뺀 값이 숫자가 아니면 NaN
    if (isNaN(dart)) {
      const optKey = dartResult[i];

      if (optKey === '*') {
        if (score[scoreIndex - 1]) score[scoreIndex - 1] *= 2;
        score[scoreIndex] *= 2;
      } else if (optKey === '#') {
        score[scoreIndex] *= -1;
      } else {
        score[scoreIndex] = score[scoreIndex] ** opt[optKey];
      }
    } else {
      scoreIndex += 1;

      if (!score[scoreIndex]) score.push(0);
      score[scoreIndex] += dart;
    }

    // 계산 전 다트 점수가 10일 경우, dataResult index += 2
    if (dart % 10 === 0) i += 2;
    else i++;
  }

  // 최종 계산된 다트 점수 배열을 합산
  return score.reduce((cur, tot) => cur + tot, 0);
}
