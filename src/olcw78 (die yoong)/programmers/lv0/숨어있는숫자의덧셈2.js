// https://school.programmers.co.kr/learn/courses/30/lessons/120864
function solution(my_string) {
  const firstCheck = Number(my_string);
  if (!Number.isNaN(firstCheck))
    return firstCheck;

  let cache = "";
  let acc = 0;
  for (const c of my_string.split('')) {
    const asNum = Number(c);

    if (Number.isNaN(asNum)) {
      if (cache.length === 0) continue;

      acc += Number(cache);
      cache = "";

      continue;
    }

    cache += asNum;
  }

  if (cache.length > 0) {
    acc += Number(cache);
  }

  return acc;
}

const a1 = solution("aAb1B2cC34oOp");
console.log(a1);

const a2 = solution("1a2b3c4d123Z");
console.log(a2);

const a3 = solution("abcde");
console.log(a3);

const a4 = solution("aAb1B2cC34oOp11");
console.log(a4);
