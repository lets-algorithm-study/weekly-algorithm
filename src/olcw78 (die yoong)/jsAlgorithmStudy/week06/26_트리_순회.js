/**
 * TC: 노드의 개수만큼 반복 -> O(N)
 * @param nodes {number[]}
 * @return {number[]}
 */
function solution(nodes) {
    return [
        preorder(nodes, 0).slice(0, -1),
        inorder(nodes, 0).slice(0, -1),
        postorder(nodes, 0).slice(0, -1)
    ];
}

// [1, 2, 3, 4, 5, 6, 7]
function preorder(nodes, i) {
    if (i < nodes.length) {
        let ret = `${nodes[i]} `;
        ret += preorder(nodes, i * 2 + 1);
        ret += preorder(nodes, i * 2 + 2);
        return ret;
    }

    return "";
}

function inorder(nodes, i) {
    // L -> M -> R
    if (i < nodes.length) {
        let ret = inorder(nodes, i * 2 + 1);
        ret += `${nodes[i]} `;
        ret += inorder(nodes, i * 2 + 2);
        return ret;
    }
    return '';
}


function postorder(nodes, i) {
    // L -> R -> M
    if (i < nodes.length) {
        let ret = postorder(nodes, i * 2 + 1);
        ret += postorder(nodes, i * 2 + 2);
        ret += `${nodes[i]} `;
        return ret;
    }
    return '';
}


const r1 = solution([1, 2, 3, 4, 5, 6, 7]);
console.log(r1);
// ["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]