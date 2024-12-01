/**
 * @param str {string}
 * @return {boolean}
 */
function solution(str) {
    let cnt = 0;
    for (const c of str) {
        // ( 로 시작 -> +1
        if (c === '(') {
            cnt += 1
            continue
        }

        // ( 아니면 -> ) -> -1
        cnt -= 1

        // 계속 진행하며 괄호가 닫힌게 더 많으면 실패
        if (cnt < 0) return false
    }

    // 마지막에 괄호쌍이 맞으면 성공
    return cnt === 0
}

const r1 = solution("(())()")
console.log(r1)

const r2 = solution("((())()")
console.log(r2)

const r3 = solution("(((()")
console.log(r3)

const r4 = solution(")()()(")
console.log(r4)

const r5 = solution("(())((()()()))")
console.log(r5)
