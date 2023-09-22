/*
* [제목] 대충 만든 자판

* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/72410

* [문제] 

*/

function solution(new_id) {
  /*
        길이 : 3 ~ 15
        소문자, 숫자, -, _, (마침표).
        마침표는 처음, 끝, 연속 사용 불가
        a ~ z > 97 ~ 122
        0 ~ 9 > 48 ~ 57
        마침표 > 46
        - > 45
        _ > 95
    */

  const test = '1';

  // 소문자로 치환
  // const level1 = test.toLowerCase();
  const level1 = new_id.toLowerCase();

  const level2 = level1.split('').filter((item, i) => {
    const code = item.charCodeAt(0);

    return (
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57) ||
      code === 45 ||
      code === 95 ||
      code === 46
    );
  });

  console.log('level 2');
  console.log(level2);

  let level3 = level2.filter((item, i) => {
    if (item !== '.') return true;
    else return level2[i - 1] !== item;
  });

  console.log('level 3');
  console.log(level3);

  let level4 = level3;

  if (level4[0] === '.') {
    level4 = level4.slice(1);
  }

  if (level4[level4.length - 1] === '.') {
    level4 = level4.slice(0, level4.length - 1);
  }

  console.log('level 4');
  console.log(level4);

  const level5 = level4.length === 0 ? ['a'] : level4;

  console.log('level 5');
  console.log(level5);

  let level6 = level5.slice(0, 15);

  if (level6[level6.length - 1] === '.') {
    level6 = level6.slice(0, level6.length - 1);
  }

  console.log('level 6');
  console.log(level6);

  let level7 = level6;

  while (level7.length < 3) {
    level7.push(level7[level7.length - 1]);
  }

  console.log('level 7');
  console.log(level7);

  return level7.join('');
}
