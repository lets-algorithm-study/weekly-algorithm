function solution(nodes) {
    return [
        preorder(nodes).slice(0, -1),
        inorder(nodes).slice(0, -1),
        postorder(nodes).slice(0, -1),
    ]
}

// 방문
// 거쳐가기
// 2개가 다름.

function preorder(nodes) {
    function recursive(nodes, i) {
        if (i < nodes.length) {
            let ret = `${nodes[i]} `;
            ret += recursive(nodes, i * 2 + 1);
            ret += recursive(nodes, i * 2 + 2);
            return ret;
        }
        return ``;
    }

    return recursive(nodes, 0);
}

function inorder(nodes) {
    function recursive(nodes, i) {
        if (i < nodes.length) {
            let ret = recursive(nodes, i * 2 + 1);
            ret += `${nodes[i]} `;
            ret += recursive(nodes, i * 2 + 2);
            return ret;
        }
        return ``;
    }
    return recursive(nodes, 0);
}

function postorder(nodes) {
    function recursive(nodes, i) {
        if (i < nodes.length) {
            let ret = recursive(nodes, i * 2 + 1);
            ret += recursive(nodes, i * 2 + 2);
            ret += `${nodes[i]} `;
            return ret;
        }
        return ``;
    }
    return recursive(nodes, 0);
}

const r1 = solution([1, 2, 3, 4, 5, 6, 7]);
console.log(r1);