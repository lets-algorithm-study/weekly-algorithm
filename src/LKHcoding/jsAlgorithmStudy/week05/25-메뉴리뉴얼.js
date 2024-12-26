// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function getCombinations(str, size) {
  const chars = str.split('').sort();
  const combinations = [];

  function combine(start, prefix) {
    if (prefix.length === size) {
      combinations.push(prefix);
      return;
    }

    for (let i = start; i < chars.length; i++) {
      combine(i + 1, prefix + chars[i]);
    }
  }

  combine(0, '');
  return combinations;
}

function solution(orders, course) {
  return course
    .map(size => {
      // 각 주문에 대해 모든 조합을 구하고 카운팅
      const menuCount = new Map();

      orders.forEach(order => {
        getCombinations(order, size).forEach(menu => {
          menuCount.set(menu, (menuCount.get(menu) ?? 0) + 1);
        });
      });

      // 최대 주문 횟수 찾기
      const maxCount = Math.max(0, ...menuCount.values());

      // 최대 주문 횟수가 2 미만이면 빈 배열 반환
      if (maxCount < 2) {
        return [];
      }

      // 최대 주문 횟수와 같은 메뉴들만 반환
      return [...menuCount.entries()]
        .filter(([key, value]) => value === maxCount)
        .map(([key]) => key);
    })
    .flat()
    .sort();
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
