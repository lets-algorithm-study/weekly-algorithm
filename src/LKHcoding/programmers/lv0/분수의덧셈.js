// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  // 최대공약수를 구하는 함수(유클리드 호제법)
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  // 두 분수의 분모를 곱하여 같은 분모로 만들기
  let commonDenom = denom1 * denom2;

  // 분자에도 해당 분모를 곱한 뒤 더하기
  let commonNumer = numer1 * denom2 + numer2 * denom1;

  // 기약분수로 만들기 위해 최대공약수를 구한 뒤 분자와 분모를 나눠주기
  let divisor = gcd(commonNumer, commonDenom);
  let reducedNumer = commonNumer / divisor;
  let reducedDenom = commonDenom / divisor;

  // 기약분수로 나타낸 분자와 분모를 순서대로 담은 배열을 반환
  return [reducedNumer, reducedDenom];
}
