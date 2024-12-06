/**
 * 풀이
 *   (, {, [ 은 stack 에 넣고
 *   ), }, ] 은 stack pop 으로 비교 하여 쌍이 맞는지 체크
 * 분석
 *   TC: O(N^2)
 *   - 회전해주는 루프: O(N)
 *   - 내부 stack push/pop 하며 쌍이 맞는지 체크하는 루프: O(M)
 *   - O(N * M) -> O(N^2)
 *   SC: O(N)
 * @param s {string}
 * @return {number}
 * */
function solution(s) {
    if (s.length === 0) return 0

    const $s = s.split("")
    let rotCnt = 0
    let answer = 0
    while (rotCnt++ < s.length) {
        const joinedStr = $s.join("")
        if (isCorrect(joinedStr)) {
            answer++
        }
        $s.push($s.shift())
    }

    return answer
}

/**
 * @param str {string}
 * @return {boolean}
 */
function isCorrect(str) {
    const stack = []
    for (const s of str) {
        if (s === "[" || s === "(" || s === "{") {
            stack.push(s)
        } else if (s === "]" || s === ")" || s === "}") {
            const last = stack.pop()
            const ok = (s === ")" && last === "(") ||
                (s === "]" && last === "[") ||
                (s === "}" && last === "{")
            if (!ok) return false
        }
    }

    return 0 === stack.length
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))
console.log(solution("(){{"))
console.log(solution("{(})"))
// 괄호를 열고 닫았을 때, 이 사이에 다른 괄호가 열려있다면 실패
