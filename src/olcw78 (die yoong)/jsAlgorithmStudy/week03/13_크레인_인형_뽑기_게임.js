/**
 *
 * @param board {number[][]}
 * @param moves {number[]}
 * @return {number}
 */
function solution(board, moves) {
    let done = 0
    const buf = []
    const rows = board[0].length
    const cols = board.length


    for (const m of moves) {
        let found = false
        for (let j = 0; j < rows; j++) {
            if (found) {
                found = false
                break
            }

            for (let i = 0; i < cols; i++) {
                const cur = board[i][m - 1]
                if (cur !== 0) {
                    if (buf.length > 0 && buf[buf.length - 1] === cur) {
                        done++
                        buf.pop()
                    } else {
                        buf.push(cur)
                    }

                    board[i][m - 1] = 0
                    found = true
                    break
                }
            }
        }
    }

    return done * 2
}

console.log(solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
    ],
    [1, 5, 3, 5, 1, 2, 1, 4])
)