// U: 위쪽으로 한 칸 가기
// D: 아래쪽으로 한 칸 가기
// R: 오른쪽으로 한 칸 가기
// L: 왼쪽으로 한 칸 가기
// 캐릭터가 처음 걸어본 길의 길이를 구하기

const cmd = {
    "U": {x: 0, y: 1},
    "D": {x: 0, y: -1},
    "R": {x: 1, y: 0},
    "L": {x: -1, y: 0},
}

const outsideBoundary = (x, y) =>
    x < -5 ||
    x > 5 ||
    y < -5 ||
    y > 5

/**
 * @param dirs {string}
 * @return {number}
 */
function solution(dirs) {
    const dirSplit = dirs.split("")
    const history = new Set()
    let x = 0
    let y = 0

    for (const dir of dirSplit) {
        const cur = cmd[dir]

        if (outsideBoundary(x, y)) continue
        x += cur.x
        y += cur.y


        const id = `` + x + y
        history.add(id)
    }

    return history.size
}

const r1 = solution("ULURRDLLU")
console.log(r1)

const r2 = solution("LULLLLLLU")
console.log(r2)

const r3 = solution("LLUULLUULLUULU")
console.log(r3)

const r4 = solution("LRLRLRLRLRLRLR")
console.log(r4)

console.log()

function solution1(dirs) {
    const dirSplit = dirs.split("")
    let x = 0
    let y = 0
    const history = new Set()

    for (const dir of dirSplit) {
        const cur = cmd[dir]

        const bx = x
        const by = y
        if (outsideBoundary(x, y)) continue

        x += cur.x
        y += cur.y


        history.add(`${x}${y}${bx}${by}`)
        history.add(`${bx}${by}${x}${y}`)
    }

    return history.size / 2
}

const r5 = solution1("ULURRDLLU")
console.log(r5)

const r6 = solution1("LULLLLLLU")
console.log(r6)

const r7 = solution1("LLUULLUULLUULU")
console.log(r7)

const r8 = solution1("LRLRLRLRLRLRLR")
console.log(r8)
