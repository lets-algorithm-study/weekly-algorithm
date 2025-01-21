/**
 * TC: O(N)
 * set 변환: O(N)
 * @param {number[]} phuketmons 
 * @returns 
 */
function solution(phuketmons) {
    const pickNum = phuketmons.length / 2;
    const set = new Set(phuketmons);
    if (pickNum > set.size) return set.size;
    return pickNum;
}


const r1 = solution([3, 1, 2, 3]);
console.log(r1); // 2

const r2 = solution([3, 3, 3, 2, 2, 4]);
console.log(r2); // 3

const r3 = solution([3, 3, 3, 2, 2, 2]);
console.log(r3); // 2