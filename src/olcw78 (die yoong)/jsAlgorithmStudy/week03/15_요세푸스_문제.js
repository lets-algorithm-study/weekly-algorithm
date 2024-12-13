/**
 * cond: 1 <= n, k <= 1,000
 * @param n
 * @param k
 */
function solution(n, k) {
    const q = Array.from({length: n}, (_, i) => i + 1);
    let cursor = k - 1;
    while (q.length > 1) {
        q.splice(cursor, 1);
        cursor = (cursor + k) % q.length;
    }

    return q[0];
}

const r1 = solution(5, 2);
console.log(r1);