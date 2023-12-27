//@ts-check
/**
 * @param {[number, number][]} score
 */
function solution(score) {
    const sum = score.map((v) => v[0] + v[1]);
    const chart = [...sum].sort(($0, $1) => $1 - $0);

    const res = [];
    for (const n of sum) {
        const found = chart.findIndex(x => x === n) + 1;
        res.push(found);
    }
    return res;
}

const res = solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]);
console.log(res);