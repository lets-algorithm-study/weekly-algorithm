// polynomialHash 를 구현
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1000000007; // 해시테이블 크기 (모드연산용 상수)
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  // stringList 의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map(str => polynomialHash(str));

  // queryList 의 각 문자열이 stringList 에 있는지 확인
  const result = [];

  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple'])
);
