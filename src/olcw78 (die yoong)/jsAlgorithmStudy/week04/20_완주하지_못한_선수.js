/**
 * 단 한 명의 선수를 제외하고 모두 마라톤을 완주.
 * 완주하지 못한 선수의 이름을 반환해라!
 * @param participant {string[]}
 * @param completion {string[]}
 * @returns {string}
 */
function solution(participant, completion) {
    const ht = new Map();
    for (const p of participant) {
        if (!ht.has(p)) {
            ht.set(p, 1);
        } else {
            ht.set(p, ht.get(p) + 1);
        }
    }

    for (const c of completion) {
        if (ht.has(c)) {
            ht.set(c, ht.get(c) - 1);
        }
    }

    for (const [k, v] of ht) {
        if (v > 0) return k;
    }
    return null;
}

const r1 = solution(
    ['leo', 'kiki', 'eden'],
    ['eden', 'kiki']);
console.log(r1);

const r2 = solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']);
console.log(r2);

const r3 = solution(
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav']);
console.log(r3);