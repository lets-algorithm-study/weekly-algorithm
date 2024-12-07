/**
 *
 * 제약조건
 * s 길이: 1M 이하의 자연수
 *
 * @param s {string}
 * @return {1 | 0}
 */
// function solution(s) {
//     let cur = null
//     let prv = null
//     let consecutiveI = -1
//     let isConsecutive = false
//
//     while (s.length > 0) {
//         for (let i = 0; i < s.length; i++) {
//             prv = cur
//             cur = s.at(i)
//
//             if (prv === cur) {
//                 isConsecutive = true
//                 consecutiveI = i - 1
//                 break
//             }
//
//             if (i === s.length - 1)
//                 return 0
//         }
//
//         if (isConsecutive) {
//             const split = s.split("")
//             split.splice(consecutiveI, 2)
//             s = split.join("")
//         }
//
//         prv = cur = null
//     }
//
//     return 1
// }

// baabaa -> b[aa]baa
// bbaa -> [bb]aa
// aa -> [aa]
// empty -> 1

const r1 = solution("baabaa")
console.log(r1)

const r2 = solution("cdcd")
console.log(r2)

/**
 *
 * 제약조건
 * s 길이: 1M 이하의 자연수
 *
 * @param s {string}
 * @return {1 | 0}
 */
function solution1(s) {
    const stack = [s.at(0)]

    for (const ch of s.slice(1)) {
        if (stack[stack.length - 1] === ch) {
            stack.pop()
            continue
        }

        stack.push(ch)
    }

    return stack.length === 0 ? 1 : 0
}

const r3 = solution("baabaa")
console.log(r3)

const r4 = solution("cdcd")
console.log(r4)

