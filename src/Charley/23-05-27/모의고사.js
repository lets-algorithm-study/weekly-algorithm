//https://school.programmers.co.kr/learn/courses/30/lessons/42840
// answers에서 가장 답을 많이 맞춘 사람

const solution = (answers) => {
  let result = [];
  let supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let score = [];
  // 인원만큼 for문
  for (let i = 0; i < supo.length; i++) {
    //값을 비교해서 맞춘 수를 반환 (index의 나머지 계산)
    score[i] = answers.filter(
      (el, index) => el === supo[i][index % supo[i].length],
    ).length;
  }

  // 가장 많이 맞춘 수
  let max = Math.max(...score);

  // 동률인 경우 오름차순 정렬
  if (score[0] === max) result.push(1);
  if (score[1] === max) result.push(2);
  if (score[2] === max) result.push(3);

  return result;
}