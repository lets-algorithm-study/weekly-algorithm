/**
 * TC: O(N + K) -> O(N)
 * find(): O(1)
 * union(): O(1)
 * for 문 + find/union 연산: O(N)
 * 마지막에 1번 k번 연산 하므로 + M
 * @param {number} k 
 * @param {(string | number)[][]} operations 
 * @returns {number}
 */
function simpleUnionFind(k, operations) {
    const disjointSet = Array.from({ length: k }, (_, i) => i);
    for (let i = 0; i < operations.length; i++) {
        const [op, x, y] = operations[i];
        if (op === 'u') {
            union(disjointSet, x, y);
        } else {
            find(disjointSet, x);
        }

        if (i === operations.length - 1) {
            const arr = Array.from({ length: k }, (_, i) => find(disjointSet, i));
            const set = new Set(arr);
            return set.size;
        }
    }
}

function union(disjointSet, x, y) {
    const rootX = find(disjointSet, x);
    const rootY = find(disjointSet, y);
    disjointSet[rootY] = rootX;
}

function find(disjointSet, x) {
    if (disjointSet[x] === x) {
        return x;
    }
    disjointSet[x] = find(disjointSet, disjointSet[x]);
    return disjointSet[x];
}


const r1 = simpleUnionFind(3, [['u', 0, 1], ['u', 1, 2], ['f', 2]]);
console.log(r1); // 1

const r2 = simpleUnionFind(4, [['u', 0, 1], ['u', 2, 3], ['f', 0]]);
console.log(r2); // 2
