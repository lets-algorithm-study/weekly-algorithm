/**
 * 시간 복잡도 (Time Complexity)
     * ID 매핑 생성
     * id_list를 순회: O(N), N은 id_list의 길이
     * 신고 기록 처리
     * report 배열을 순회: O(R), R은 report의 길이
     * 각 신고 처리에서 Set 연산: O(1)
     * 결과 계산
     * history 객체 순회: O(M), M은 신고된 유저 수 (최대 N)
     * 각 신고자 Set 순회: O(N) 최악의 경우
 * 총 시간 복잡도: O(N + R + N²) = O(N² + R)
 * 공간 복잡도 (Space Complexity)
     * idMap: O(N)
     * 모든 ID와 인덱스 저장
     * history: O(R)
     * 최악의 경우, 모든 신고 기록을 저장
     * Set 객체들이 포함됨
     * ret 배열: O(N)
     * 결과 배열
 * 총 공간 복잡도: O(N + R) 
 * @param {string[]} id_list 
 * @param {string[]} report 
 * @param {number} k 
 * @returns 
 */
function solution24(id_list, report, k) {
    // ID를 인덱스로 매핑하는 객체 생성
    const idMap = {};
    for (const [i, id] of id_list.entries()) {
        idMap[id] = i;
    }

    // 신고 기록을 저장할 객체
    /** @type {{ reportedBy: Set<string>, reportedCount: number }} */
    const history = {};
    const ret = new Array(id_list.length).fill(0);

    // 신고 기록 처리
    for (const r of report) {
        const [reporter, reported] = r.split(' ');

        if (!history[reported]) {
            history[reported] = {
                reportedBy: new Set([reporter]),
                reportedCount: 1
            };
        } else {
            history[reported].reportedBy.add(reporter);
            history[reported].reportedCount = history[reported].reportedBy.size;
        }
    }

    // 결과 계산
    Object.entries(history).forEach(([reported, data]) => {
        if (data.reportedCount >= k) {
            data.reportedBy.forEach(reporter => {
                ret[idMap[reporter]]++;
            });
        }
    });

    return ret;
}

// 테스트 실행
function run24() {
    const r1 = solution24(
        ["muzi", "frodo", "apeach", "neo"],
        [
            "muzi frodo",
            "apeach frodo",
            "frodo neo",
            "muzi neo",
            "apeach muzi"
        ],
        2
    );
    console.log(r1); // [2, 1, 1, 0]

    const r2 = solution24(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        3
    );
    console.log(r2); // [0, 0]
}