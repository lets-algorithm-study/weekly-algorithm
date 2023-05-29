const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

solution(input);

// 문제풀이
function solution(str) {
  let tmpStr = [...str].map(item => +item);

  const idxArr = [];

  while (tmpStr.length > 0) {
    const firstChar = tmpStr[0];

    const idx = tmpStr.indexOf(firstChar === 1 ? 0 : 1);

    if (idx >= 0) {
      idxArr.push(idx);
    }
    if (idx === -1) {
      tmpStr.splice(0);
    } else {
      tmpStr.splice(0, idx);
    }
  }
  console.log(Math.ceil(idxArr.length / 2));
}

/**
 * 이 문제는 분류가 그리디다.
 * 왜 그리디인지 잘 모르지만 일단 접근방식은
 * 문제의 예제 입출력을 보고 패턴을 찾아서 풀었다.
 * 0과 1로 이루어진 문자열 중 반대 숫자가 나오는 지점을 찾아서 기록하고
 * 문자를 계속 잘라내서 끝까지 순회한다.
 * (1과 0의 덩어리를 구해서 덩어리 갯수에따라 뒤집어주면 답)
 * indexOf랑 splice로 반대 문자가 나오는 지점을 캐치해서 idxArr에 담아두고
 * 나누기 2를 한다음 소숫점 올림 처리를 하면 정답이 나온다.
 * 다른 풀이방식도 참고해볼것
 */

/**
 * 풀이 관점을 검색을 좀 해봤는데
 * 0 덩어리, 1덩어리의 갯수를 구하고
 * 둘 중 덩어리 갯수가 더 작은 쪽의 갯수가 답이라고 생각하면 된다.
 * 별로 어려울게 없는데 혼자 관점을 어렵게 생각한것같다.
 * 풀이 방법을 조금 더 꼬아서 어렵게 생각했는데
 * 0, 1의 덩어리 갯수를 구해서 둘중 더 작은걸 답으로
 * 리턴하면 코드가 더 간단했었을듯
 */
