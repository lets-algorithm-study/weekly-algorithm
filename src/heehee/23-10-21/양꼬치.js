function solution(n, k) {
  const nPrice = 12000;
  const kPrice = 2000;
  const freeDrink = Math.floor(n / 10);

  return nPrice * n + (k - freeDrink) * kPrice;
}
