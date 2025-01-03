/**
 * @param enroll {string[]}
 * @param referral {string[]}
 * @param seller {string[]}
 * @param amount {number[]}
 * @returns {number[]}
 */
function solution(enroll, referral, seller, amount) {
    const ret = Array.from({length: referral.length}).fill(0);
    const PRICE = 100;
    for (let i = 0; i < seller.length; i++) {
        let j = enroll.findIndex(x => x === seller[i]);
        let next = enroll[j];
        let start = amount[i] * PRICE * 0.9
        ret[j] += start;
        // console.log(`#${i} ${next}, ${sum}>`);

        while (next && next !== "-") {
            next = referral[j];
            j = enroll.findIndex(x => x === next);
            if (j === -1) break;

            const rest = Math.floor(start * 0.1);
            start = rest;
            ret[j] += rest;
            // console.log(`#${i} ${next}, ${rest}`);
        }
    }
    return ret;
}

const r1 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
);
console.log(r1); // [360, 958, 108, 0, 450, 18, 180, 1080]

const r2 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
);
console.log(r2); // [0, 110, 378, 180, 270, 450, 0, 0]

const r3 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "sam"],
    [2, 3]
);
console.log(r3); // [0, 110, 378, 180, 270, 450, 0, 0]

const r4 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "sam", "sam"],
    [2, 3, 4]
);
console.log(r4); // [0, 110, 378, 180, 270, 450, 0, 0]
