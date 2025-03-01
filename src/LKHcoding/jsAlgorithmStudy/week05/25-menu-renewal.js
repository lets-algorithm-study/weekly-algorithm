// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function getCombinations(str, size) {
  // 문자열 정렬: O(MlogM)
  const chars = str.split('').sort();
  const combinations = [];

  function combine(start, prefix) {
    if (prefix.length === size) {
      combinations.push(prefix);
      return;
    }

    // 조합 생성: nCr => O(2^M)
    // nCr < 2^n
    // nCr은 r이 n/2일 때 최대가 되며, 이때의 값은 대략 2^n/√n에 근사합니다.
    // 따라서 dominant term 인 O(2^n)
    for (let i = start; i < chars.length; i++) {
      combine(i + 1, prefix + chars[i]);
    }
  }

  combine(0, '');
  return combinations;
}

function solution(orders, course) {
  // 전체 시간복잡도: O(N * 2^M)
  return (
    course
      .map(size => {
        // O(K) - course 크기
        // 각 주문에 대해 모든 조합을 구하고 카운팅
        const menuCount = new Map();

        // O(N) - orders 길이
        orders.forEach(order => {
          // O(MlogM + 2^M) - 각 주문에 대해 정렬 및 조합 생성
          getCombinations(order, size).forEach(menu => {
            menuCount.set(menu, (menuCount.get(menu) ?? 0) + 1);
          });
        });

        // O(N * 2^M) - Map 값들 중 최대값 찾기
        // 최대 주문 횟수 찾기
        const maxCount = Math.max(0, ...menuCount.values());

        // 최대 주문 횟수가 2 미만이면 빈 배열 반환
        if (maxCount < 2) {
          return [];
        }

        // O(N * 2^M) - 최대값과 같은 키 찾기
        // 최대 주문 횟수와 같은 메뉴들만 반환
        return [...menuCount.entries()]
          .filter(([key, value]) => value === maxCount)
          .map(([key]) => key);
      })
      // O(K * N * MlogM + K * N * 2^M)
      // => K는 상수이므로 제거
      // => MlogM 보다 지수 시간이 더 크므로 O(N * 2^M)
      .flat()
      .sort()
  );
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));

/**
 * size=4, str='BDHGIJKQYZP' 의 실행과정
 * BDHGIJKQYZP => 정렬 => BDGHIJKPQYZ
 *
 * 1. combine(0, '')            → 빈 문자열로 시작
 *    2. combine(1, 'B')        → B로 시작하는 조합
 *       3. combine(2, 'BD')    → BD로 시작하는 조합
 *          4. combine(3, 'BDG') → BDG로 시작하는 조합
 *             5. combine(4, 'BDGH') ✓ 저장! (길이 4 달성)
 *             5. combine(4, 'BDGI') ✓ 저장!
 *             5. combine(4, 'BDGJ') ✓ 저장!
 *             ...
 *          4. combine(3, 'BDH')
 *             5. combine(4, 'BDHI') ✓ 저장!
 *             5. combine(4, 'BDHJ') ✓ 저장!
 *             ...
 *       3. combine(2, 'BG')
 *          4. combine(3, 'BGH')
 *             5. combine(4, 'BGHJ') ✓ 저장!
 *             ...
 *
 *    2. combine(1, 'D')        → D로 시작하는 조합
 *       3. combine(2, 'DG')
 *          4. combine(3, 'DGH')
 *             5. combine(4, 'DGHI') ✓ 저장!
 *             ...
 */
