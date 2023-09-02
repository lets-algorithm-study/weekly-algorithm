function solution(chicken) {
  let answer = parseInt(chicken / 10);
  const coupon = answer + parseInt(chicken % 10);
  if (coupon < 10) {
    return answer;
  }
  return answer + solution(coupon);
}
