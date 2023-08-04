/*
* [제목] 성격 유형 검사하기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/118666

* [문제] 

*/

/*
R T
C F
J M1
A N
*/
// 같으면 사전순으로하기
function solution(survey, choices) {
  var answer = '';

  const types = ['RT', 'CF', 'JM', 'AN'];
  types.map(([a, b]) => {
    console.log(a, b);
  });

  let cha = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((item, i) => {
    const tmp = choices[i] - 4;
    let surveyPieces = item.split('');

    if (tmp > 0) cha[surveyPieces[1]] += Math.abs(tmp);
    else cha[surveyPieces[0]] += Math.abs(tmp);
  });

  answer += cha['R'] >= cha['T'] ? 'R' : 'T';
  answer += cha['C'] >= cha['F'] ? 'C' : 'F';
  answer += cha['J'] >= cha['M'] ? 'J' : 'M';
  answer += cha['A'] >= cha['N'] ? 'A' : 'N';

  return answer;
}
