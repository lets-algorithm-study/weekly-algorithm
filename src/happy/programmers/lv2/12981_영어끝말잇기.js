/*
* [제목] 영어끝말잇기

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/12981

* [문제] 

*/

function solution(n, words) {
  var answer = [0, 0];

  let previousWord = '';
  words.some((currentWord, i) => {
    const tmp = words.indexOf(currentWord);

    // 끝말있기가 안되거나, 앞번호에 글자가 나왔거나
    if (
      tmp < i ||
      (i !== 0 && previousWord[previousWord.length - 1] !== currentWord[0])
    ) {
      // 탈락
      let personIndex = (i % n) + 1;
      let turn = Math.floor(i / n) + 1;

      answer = [personIndex, turn];

      return true;
    }

    previousWord = currentWord;
  });

  return answer;
}
