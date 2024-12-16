/**
 * 각 초의 주가를 기준으로 해당초~n초 사이에 가격이 떨어지지 않은 시간은 몇 초인가?
 * https://school.programmers.co.kr/questions/20326?question=20326
 * https://school.programmers.co.kr/questions/39058
 *
 *
 * 제약 조건
 * - prices 의 각 가격은 1<=x<=10,000
 * - prices 의 길이는 2<=len<=100,000
 * @param prices {number[]} n초 간의 주가를 초 단위로 기록한 배열
 */
function solution(prices) {
    // O(N^2) 풀이
    const history = {}
    for (let i = 0; i < prices.length; i++) {
        history[i] = 0
        for (let j = i + 1; j < prices.length; j++) {
            history[i]++
            if (prices[i] > prices[j]) {
                break
            }
        }
    }
    return Object.values(history)
}

/**
* Test Case #1
* [1, 2, 3, 2, 3] -> [4, 3, 1, 1, 0]
* t=1
*   #1 1->2 (1<=2)
*   #2 1->2->3 (1<=3)
*   #3 1->2->3->2 (1<=3)
*   #4 1->2->3->2->3 (1<=3)
* => 4
*
* t=2
*   #1 2->3 (2<=3)
*   #2 2->3->2 (2<=2)
*   #3 2->3->2->3 (2<=3)
* => 3
*
* t=3 그래도 1초 유지되었으니깐 1 카운트
*   #1 3->2 (3>=2)
* => 1
*
* t=4
*   #1 2->3 (2<=3)
* ==> 1
*
* t=5
* => 0
*/
const r1 = solution([1, 2, 3, 2, 3])
console.log(r1)

const r2 = solution([1, 2, 3, 2, 3, 1])
console.log(r2)

const r3 = solution([5, 4, 3, 2, 5])
console.log(r3)

const r4 = solution([1, 2, 3, 4, 1])
console.log(r4)

const r5 = solution([5, 4, 3, 2, 5])
console.log(r5)

