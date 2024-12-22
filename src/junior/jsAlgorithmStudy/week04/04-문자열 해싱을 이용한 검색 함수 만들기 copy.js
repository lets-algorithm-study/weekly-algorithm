function ploynomialHash(str) {
  const p = 31;
  const m = 1_000_000_007;
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution(stringList, queryList) {
  const hashList = stringList.map(str => ploynomialHash(str));

  const result = [];

  for (const query of queryList) {
    const queryHash = ploynomialHash(query);

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
// [ true, false, false, true ]
