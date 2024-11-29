/**
 * @param arr {number[]}
 */
function solution(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

const r1 = solution([1, -5, 2, 4, 3]);
console.log(r1);
const r2 = solution([2, 1, 1, 3, 2, 5, 4]);
console.log(r2);
const r3 = solution([6, 1, 7]);
console.log(r3);
