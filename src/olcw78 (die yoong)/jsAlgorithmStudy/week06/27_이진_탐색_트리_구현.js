class Node {
    val
    left
    right

    /**
     * @constructor
     * @param val {number}
     * @param left {Node}
     * @param right {Node}
     */
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    /** @type {Node} */
    root

    /**
     * @constructor
     * @param numbers {number[]}
     */
    constructor(numbers) {
        for (const n of numbers) {
            this.add(n);
        }
    }

    /**
     * @param n {number}
     */
    add(n) {
        if (!this.root) {
            this.root = new Node(n, null, null);
            return;
        }

        let cur = this.root;
        while (true) {
            if (cur.val > n) {
                if (cur.left) {
                    cur = cur.left;
                } else {
                    cur.left = new Node(n, null, null);
                    break;
                }
            } else {
                if (cur.right) {
                    cur = cur.right;
                } else {
                    cur.right = new Node(n, null, null);
                    break;
                }
            }
        }
    }

    /**
     * @param e {Node}
     * @returns {boolean}
     */
    find(e) {
        if (this.root.val === e) return true;

        let cur = this.root;
        while (true) {
            if (cur.val === e) return true;
            if (!cur.left && !cur.right) return false;

            if (cur.val > e) {
                if (cur.left) {
                    cur = cur.left;
                } else {
                    return false;
                }
            } else {
                if (cur.right) {
                    cur = cur.right;
                } else {
                    return false;
                }
            }
        }

        return false;
    }
}

/**
 *
 * @param lst {number[]}
 * @param searchList {number[]}
 * @return {boolean[]}
 */
function solution(lst, searchList) {
    const bst = new BinarySearchTree(lst);
    return searchList.map(bst.find.bind(bst));
}

const r1 = solution(
    [5, 3, 8, 4, 2, 1, 7, 10],
    [1, 2, 5, 6]
);
console.log(r1);

const r2 = solution(
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10]
);
console.log(r2);


const r3 = solution(
    [0, 0, 0, 0, 0],
    [2,]
);
console.log(r3);

const r4 = solution(
    [-1, 3, -5, 7, -9, 11],
    [2, 3, -5, 7, 9, -11]
);
console.log(r4);
