/**
 *
 * @param arr {number[]}
 */
function solution(arr) {
    const unq = [...new Set(arr)]
    unq.sort((a, b) => b - a);
    return unq
}

const r1 = solution([4, 2, 2, 1, 3, 4]);
console.log(r1)

const r2 = solution([2, 1, 1, 3, 2, 5, 4]);
console.log(r2)
