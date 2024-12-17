/**
 * 각 쿼리 리스트에 있는 문자열이 stringList에 있는지 확인하기
 * 있으면 return true, otherwise false
 *
 * * string hasing
 * hash(s)
 * p = 31
 *
 * @param stringList {string[]}
 * @param queryList {string[]}
 * @return {boolean[]}
 */
function solution(stringList, queryList) {
    const hashedStrings = stringList.map(hashify);
    const res = [];
    for (const q of queryList) {
        const hq = hashify(q);
        if (!hashedStrings.includes(hq)) {
            res.push(false);
        } else {
            res.push(true);
        }
    }
    return res;
}

/**
 * @param str {string}
 * @param hashLen {number}
 * @param p {number}
 */
function hashify(str) {
    const strlen = str.length;
    const p = 31;
    const m = 1000000007;
    let val = 0;
    for (let i = 0; i < strlen; i++) {
        val = ((val + str.charCodeAt(i)) * Math.pow(p, i)) % m;
    }
    return val;
}


const r1 = solution(
    ["apple", "banana", "cherry"],
    ["banana", "kiwi", "melon", "apple"]);
console.log(r1)