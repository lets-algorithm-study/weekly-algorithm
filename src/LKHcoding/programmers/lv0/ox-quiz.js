// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  return quiz.map(item => {
    const [식, 답] = item.split(' = ');
    if (eval(식) === +답) {
      return 'O';
    }
    return 'X';
  });
}
