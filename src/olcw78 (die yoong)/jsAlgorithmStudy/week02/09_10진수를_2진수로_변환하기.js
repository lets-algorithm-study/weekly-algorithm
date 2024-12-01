


/** @param n {number} */
function solution(n) {
    const res = []
    while (n !== 1) {
        const left = n % 2
        n = Math.floor(n / 2)
        res.push(String(left))
    }

    res.push('1')
    return res.reduce((a, b) => b + a, "")
}

const r1 = solution(10)
// 10 / 2 = 5 ... 0
// 5  / 2 = 2 ... 1
// 2  / 2 = 1 ... 0
// -> 1010
console.log(r1)

const r2 = solution(27)
// 27 / 2 = 13 ... 1
// 13 / 2 = 6 ... 1
// 6 / 2 = 3 ...0
// 3 / 2 = 1 ... 1
// -> 11011
console.log(r2)

// -> 1100000011100
const r3 = solution(12345)
console.log(r3)
