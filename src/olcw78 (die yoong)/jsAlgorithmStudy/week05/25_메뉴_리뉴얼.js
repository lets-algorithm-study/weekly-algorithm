function makeCombination(arr, n) {
    if (n === 1) return arr.map(x => [x]);

    const result = [];
    for (const [i, e] of arr.entries()) {
        const candidates = arr.slice(i + 1);
        const combis = makeCombination(candidates, n - 1);
        const attached = combis.map(c => [e, ...c]);
        result.push(...attached);
    }
    return result;
}

/**
 *
 * @param orders {string[]}
 * @param course {number[]}
 * @return {string[]}
 */
function solution(orders, course) {
    const ret = [];
    for (const c of course) {
        const menu = [];
        for (const o of orders) {
            const spl = o.split("").sort();
            const combis = makeCombination(spl, c);
            menu.push(...combis);
        }
        // console.log(menu);
        const candidates = {};
        for (const m of menu) {
            const k = m.join("");
            if (!candidates[k]) candidates[k] = 0;
            candidates[k]++;
        }

        const max = Math.max(...Object.values(candidates));
        if (max > 1) {
            for (const [k, v] of Object.entries(candidates)) {
                if (v === max) {
                    ret.push(k);
                }
            }
        }
    }

    return ret.sort();
}

const r1 = solution(
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    [2, 3, 4]
);
console.log(r1);
console.log();
// ["AC", "ACDE", "BCFG", "CDE"]

const r2 = solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2, 3, 5]
);
console.log(r2);
console.log();
// ["ACD", "AD", "ADE", "CD", "XYZ"]

const r3 = solution(
    ["XYZ", "XWY", "WXA"],
    [2, 3, 4]
);
console.log(r3);
console.log();
// ["WX", "XY"]