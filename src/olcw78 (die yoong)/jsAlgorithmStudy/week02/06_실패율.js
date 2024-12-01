/**
 * yet: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
 * reached: 스테이지에 도달한 플레이어의 수
 * 실패율 정의 : yet / reached
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
        res.push({ i, failRate })
    }

    res.sort((a, b) => b.failRate - a.failRate)
    return res.map(x => x.i)
}

const r1 = solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
console.log(r1)

const r2 = solution(4, [4, 4, 4, 4, 4])
console.log(r2)

