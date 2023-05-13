
/*
* [제목] 
    392. Is Subsequence

* [문제] 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string 

by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 

(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

주어진 s(체크 값 문자열), t(체크 할 대상) 문자열들이 있다.
s 문자열의 문자들이 t 문자열에 차례대로 있어야한다.

* [예시] 
    1.
    Input: s = "abc", t = "ahbgdc"
    Output: true

    2.
    Input: s = "axc", t = "ahbgdc"
    Output: false

* [제약] 
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.

*/

// 코드
// 문제
// 주어진 s, t 문자열이 있다.
// 1. 문자열 s의 각 문자들이 t에 포함되어있다.
// 2. s의 각 문자들의 순서가 t에도 순서대로 포함되어 있어야한다.
// 위에 두 조건을 만족하면 true, 아니면 false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(let i=0; i < s.length; i++){
        token = s[i];

        // 현재 s 문자가 t에 포함되어있는지
        current = t.indexOf(token);

        if(current === -1){
            return false
        }else{
            // 포함 되어 있으면 앞에 문자열을 자른다. (s 문자들이 t 문자열에 순서대로 포함되어 있어야하기때문)
            t = t.slice(current + 1);
        }
    }

    return true;
};