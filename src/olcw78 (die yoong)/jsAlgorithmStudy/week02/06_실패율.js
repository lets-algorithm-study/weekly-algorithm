/**
 * 풀이
 * yet: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
 * reached: 스테이지에 도달한 플레이어의 수
 * 실패율 정의 : yet / reached
 * 주어진 stages 를 돌며
 *
 * 분석
 * 시간 복잡도: O(N^2)
 *   - 2중 루프: O(N^2)
 *   - filter: O(M^2)
 *   - 오름차순 정렬: O(L logL)
 *   - O(N^2 + M^2 + L logL) -> O(2N^2) -> O(N^2)
 * 공간 복잡도: O(N)
 *   주어진 stages: number[] + 지울 대상 배열 + res 배열 -> O(3N) --> O(N)
 *
 * @param N {number} 전체 스테이지 개수
 * @param stages {number[]} 사용자가 현재 멈춰 있는 스테이지의 번호가 담긴 배열
 */
function solution(N, stages) {
    const res = []
    for (let i = 1; i <= N; i++) {
        let yet = 0;
        let reached = 0;

        const del = []
        for (const [sti, st] of stages.entries()) {
            reached++;

            if (st <= i) {
                yet++;
                del.push(sti);
            }
        }

        stages = stages.filter((_, i) => !del.includes(i));

        const failRate = yet / reached
        res.push({i, failRate})
    }

    res.sort((a, b) => b.failRate - a.failRate)
    return res.map(x => x.i)
}

const r1 = solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
console.log(r1)

const r2 = solution(4, [4, 4, 4, 4, 4])
console.log(r2)

/**
 *
 * @param N {number}
 * @param stages {number[]}
 */
function answer(N, stages) {
    const challegener = new Array(N + 2).fill(0)
    for (const st of stages) {
        challegener[st] += 1
    }

    const fails = {}
    let total = stages.length
    for (let i = 0; i <= N; i++) {
        if (challegener[i] === 0) {
            fails[i] = 0
            continue
        }

        fails[i] = challegener[i] / total
        total -= challegener[i]
    }

    const res = Object.entries(fails)
        .sort((a, b) => b[1] - a[1])

    return res.map(x => Number(x[0]))
}