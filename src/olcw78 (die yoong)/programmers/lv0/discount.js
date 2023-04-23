// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
function calcPrice(price) {
  if (price < 100_000) {
    return price;
  } else if (price >= 100_000 && price < 300_000) {
    return price - (price * 0.05);
  } else if (price >= 300_000 && price < 500_000) {
    return price - (price * 0.1);
  } else if (price >= 500_000) {
    return price - (price * 0.2);
  }
}

function solution(price) {
  const discount = calcPrice(price);
  return Math.trunc(discount);
}