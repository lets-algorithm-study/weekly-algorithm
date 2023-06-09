
/*
* [제목] 
2160. Minimum Sum of Four Digit Number After Splitting Digits

* [문제] 
You are given a positive integer num consisting of exactly four digits.

Split num into two new integers new1 and new2 by using the digits found in num.

Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3.

Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

Return the minimum possible sum of new1 and new2.

주어진 4 자리 값을 new1, new2로 두 개로 쪼개고 두 개의 합이 최소가 되게 구해라 ( 단, 0도 맨 앞으로 뺄 수 있다. )

* [예시] 
1.
Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

2.
Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

* [제약] 
*
1000 <= num <= 9999

*/

// 코드
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let new1 = "";
    let new2 = "";

    const tmp = num.toString().split("");

    tmp.sort((a, b) => a-b);

    new1 = tmp[0] + tmp[2];
    new2 = tmp[1] + tmp[3];

    return Number(new1) + Number(new2);
};