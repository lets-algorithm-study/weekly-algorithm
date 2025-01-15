function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const seen = [];
    let s = {x: 0, y: 0};
    let l = {x: 0, y: 0};
    let e = {x: 0, y: 0};
    for (let x = 0; x < row; x++) {
        seen.push([]);
        for (let y = 0; y < col; y++) {
            seen[x][y] = false;
            switch (maps[x][y]) {
                case "S":
                    s = {x, y};
                    break;
                case "L":
                    l = {x, y};
                    break;
                case "E":
                    e = {x, y};
                    break;
            }
        }
    }

    return 0;
}

function isValid(x, y, row, col) {
    return x >= 0 && y >= 0 && x < row && y < col;
}

function bfs(q, maps) {
    while (q.length > 0) {
        const e = q.dequeue();

    }
}

class Queue {
    src
    head
    tail

    enqueue(e) {
        this.src[this.tail++] = e
    }

    dequeue() {
        return this.src[this.head++]
    }

    get isEmpty() {
        return this.head === this.tail;
    }
}

const r1 = solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])
console.log(r1) // == 16

const r2 = solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])
console.log(r2) // == -1
