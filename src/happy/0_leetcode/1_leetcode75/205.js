
/*
* [제목] 
    392. Is Subsequence

* [문제] 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string 

by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 

(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = 0;

    for(let i=0; i < s.length; i++){
        token = s[i];

        current = t.indexOf(token);

        if(current === -1){
            return false
        }else{
            if(result <= current){
                t = t.slice(current + 1);
            }else{
                return false;
            }
        }
    }

    return true;
};