// constraint:
// - 5 <= maps.length <= 100
// - 5 <= maps[x].length <= 100
// maps[x] 는 5중1
// S: 시작지점
// E: 출구
// L: 레버
// O: 통로
// X: 벽
// S,E,L 는 항상 다른지점에 존재, 1개씩만 있음
// 출구는 레버랑 상관없이 지나가짐
// 여러번 지나갈 수 있음
function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;

    const map2d = [];
    const seen = [];
    for (let x = 0; x < row; x++) {
        map2d.push([]);
        seen.push([]);
        for (let y = 0; y < col; y++) {
            seen[x][y] = false;
            map2d[x][y] = maps[x].at(y);
        }
    }
    let s = {x: 0, y: 0};
    let l = {x: 0, y: 0};
    let e = {x: 0, y: 0};
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < col; y++) {
            const c = maps[x][y];
            if (c === "S") s = {x, y}
            else if (c === "L") l = {x, y}
            else if (c === "E") e = {x, y}
        }
    }

    const s2e = dfs(row, col, seen, map2d, s, e);
    const s2eDone = s2e !== -1;
    if (!s2eDone) {
        return s2e;
    }

    const s2l = dfs(row, col, seen, map2d, s, l);
    const s2lDone = s2l !== -1;

    const l2e = dfs(row, col, seen, map2d, l, e);

    // console.log(s2l, l2e, s2e, seen);
    if (!s2lDone && s2eDone) return s2e;
    if (!s2lDone && !s2eDone) return -1;
    return s2l + l2e;
}

function isValidCoords(row, col, x, y) {
    return x >= 0 && y >= 0 && x < row && y < col;
}

function dfs(row, col, seen, maps, s, e) {
    let ret = 0;
    let done = false;

    function recursive(x, y) {
        if (done) return;
        if (x === e.x && y === e.y) {
            done = true;
            return;
        }
        if (!isValidCoords(row, col, x, y)) return;
        if (maps[x][y] === "X") return;

        if (seen[x][y]) return;
        seen[x][y] = true;
        ret++;

        recursive(x + 1, y);
        recursive(x - 1, y);
        recursive(x, y + 1);
        recursive(x, y - 1);
    }

    recursive(s.x, s.y);
    if (!done) return -1;
    return ret;
}

// class Queue<T> {
//     src: Array<T>;
//     head: number;
//     tail: number;
//
//     public enqueue(e: T) {
//         this.src.push(e);
//         this.tail++;
//     }
//
//     public dequeue(): T {
//         return this.src[this.tail++];
//     }
//
//     public isEmpty(): boolean {
//         return this.head === this.tail;
//     }
// }
//
// function bfs(map2d: string[][], seen: Set<number>): number {
//     return 0;
// }

const r1 = solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])
console.log(r1) // == 16

const r2 = solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])
console.log(r2) // == -1