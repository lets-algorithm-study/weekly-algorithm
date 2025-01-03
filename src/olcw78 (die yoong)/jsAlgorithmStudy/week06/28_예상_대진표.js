/**
 *
 * @param n {number}
 * @param a
 * @param b
 */
function solution(n, a, b) {
    let round = 0;
    while (a !== b) {
        a = Math.round(a / 2);
        b = Math.round(b / 2);
        n /= 2;
        round++;
    }
    return round;
}

const r1 = solution(8, 4, 7);
console.log(r1); // 3

const r2 = solution(1048576, 12345, 12346);
console.log(r2); // 1

const r3 = solution(8, 5, 8);
console.log(r3); // 2

