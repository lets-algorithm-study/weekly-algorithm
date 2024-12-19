/**
 * constraint
 * 1. 2 <= n <= 10,000
 * 2. 1 <= n[i] <= 10,000
 * 3. arr의 원소는 고유함
 * 4. 1 <= target <= 20,000
 * 
 * 앞 인덱스를 고정시키고 (for-i)
 * 뒷 인덱스를 남은 길이만큼 이동시켜서 (for-j)
 * arr[i]와 arr[j] 를 더한 값과 target 을 비교하는 
 * TC: O(N^2) 무식한 방법.
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */
function solution(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        const $0 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const $1 = arr[j];
            if (target === $0 + $1) return true;
        }
    }
    return false;
}

const r1 = solution([1, 2, 3, 4, 8], 6);
console.log(r1);

const r2 = solution([2, 3, 5, 9], 10);
console.log(r2);

const r3 = solution([1, 2, 1, 2, 1], 100);
console.log(r3);

const r4 = solution([10000, 9999, 0, 0, 0], 19999);
console.log(r4);

console.log();

/**
 * 주어진 데이터들의 빈도수를 정렬하는 방법.
 * @param {number[]} arr
 * @param {number} target
 */
function countSort(arr, target) {
    const ht = new Array(target + 1).fill(0);
    for (const n of arr) {
        // n이 target 이상이면 target - n했을 때 나오는 수가 0 밖에 없으므로 제한!..
        if (n <= target) ht[n] = 1;
    }
    return ht;
}

/**
 * TC
 * O(N^2) 완전탐색 로직에서 
 * 뒷 인덱스를 빈도수로 맵핑된 해시테이블을 이용하여 O(N)으로 처리.
 * n 을 맵핑하고, 차 인 target - n 이 이미 맵핑되어있으면 성공!
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */
function solution1(arr, target) {
    const ht = countSort(arr, target);
    for (const n of arr) {
        const a = target - n;
        if (a === n) continue;
        const isWithinBoundary = a >= 0 && a <= target;
        if (!isWithinBoundary) continue;
        if (ht[a] !== 1) continue;
        return true;
    }

    return false;
}

const r5 = solution1([1, 2, 3, 4, 8], 6);
console.log(r5);

const r6 = solution1([2, 3, 5, 9], 10);
console.log(r6);

const r7 = solution1([1, 2, 1, 2, 1], 100);
console.log(r7);

const r8 = solution1([10000, 9999, 0, 0, 0], 19999);
console.log(r8);
