
/*
* [제목] 
121. Best Time to Buy and Sell Stock

* [문제] 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
파라미터는 주식 가격 배열이다.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
사고 팔기를 통해 이익을 최대한 내기를 원한다. 

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
이익을 낼 수 없을 경우 0을 반환한다.

* [예시] 
1.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

2.
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

* [제약] 
1 <= prices.length <= 105
0 <= prices[i] <= 104

* 부연 설명

그리디 알고리즘 방식으로 푸는 문제
- 현재 상황에서 지금 당장 좋은 것만 고르는 방법을 의미
- 최소한의 아이디어를 떠올릴 수 있는 능력을 요구
- 단순히 가장 좋아보이는 것을 반복적으로 선택해도 최적의 해를 구할 수 있는지 검토

*
*/

// 코드

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;

    // 싸게 산 후 > 비싸게 판다.
    prices.forEach((item) => {
        // 싸게 산날을 설정
        if(item < minPrice){
            minPrice = item;
        }

        // 비싸게 산 날을 결정
        if(item - minPrice > profit){
            profit = item - minPrice
        }
    })

    return profit;
};

