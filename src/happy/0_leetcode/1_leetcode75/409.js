
/*
* [제목] 
409. Longest Palindrome

* [문제] 
Given a string s which consists of lowercase or uppercase letters, 
주어진 문자열은 소, 대문제로 구성

return the length of the longest palindrome that can be built with those letters.
주어진 문자열로 회문으로 구성(대칭이 되는 문자열로 변경) => 최종적으로 회문의 길이를 반환

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
대문자랑 소문자는 구별된다.

* [예시] 
1.
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

2.
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

* [제약] 
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

*
*/

// 코드

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const result = new Set();
    let size = 0;   // 쌍을 이루는 갯수
    const tmp = s.split("");

    tmp.forEach((item) => {
        if(result.has(item)) {
            size += 2;
            result.delete(item);
        } else { 
            result.add(item);
        }
    })

    // 홀수개로 bbabb 이런 경우 + 1 해줘야함
    const rest = result.size > 0 ? 1 : 0;

    return size + rest;
};