// dfs
function dfs1(graph, v, visited) {
    visited[v] = true;
    console.log(v)

    for (const node of graph[v]) {
        if (!visited[node]) {
            dfs1(graph, node, visited);
        }
    }
}

const graph = [
    [1, 2, 4],
    [0, 5],
    [0, 5],
    [4],
    [0, 3],
    [1, 2],
];
const visited = Array(7).fill(false);

// dfs1(graph, 0, visited);

function makeCombination(arr, n) {
    // 1개만 뽑는 다면 그대로 조합을 반환하며 탈출 조건
    if (n === 1) return arr.map(x => [x]);
    const result = [];
    for (const [i, e] of arr.entries()) {
        // 현재 i 이 후 요소들 추출
        const rest = arr.slice(i + 1);
        // 추출된 요소들만 재귀
        const combis = makeCombination(rest, n - 1);
        // 선택한 요소와 구한값들을 합치기
        const attached = combis.map(c => [e, ...c]);
        result.push(...attached);
    }
    return result;
}

const arr1 = [1, 2, 3, 4];
const c1 = makeCombination(arr1, 2);
console.log("from: ", arr1, "\n", c1);


function makeCombination2(n, k) {

}