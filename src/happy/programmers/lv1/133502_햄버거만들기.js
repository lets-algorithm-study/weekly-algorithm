/*
* [제목] 햄버거 만들기


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/133502

* [문제] 

*/

function solution(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;

      // -4 이후로 다 제거
      stk.splice(-4);
    }
  }
  return count;
}

/*
function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            
            // i부터 4개 제거
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}
*/
