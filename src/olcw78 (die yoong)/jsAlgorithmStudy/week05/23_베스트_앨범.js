/**
 * 시간 복잡도: O(n log n)
* 주요 연산별 분석:
* 1. 데이터 구성 단계
* 첫 번째 for loop
* - 시간 복잡도: O(n), n은 genres 배열의 길이
* 장르별 정렬 단계 rank -> count
* - 시간 복잡도: O(k log k), k는 고유 장르의 수 (k ≤ n)
* 각 장르 내 노래 정렬 단계 -> genre.songs.sort
* 시간 복잡도: O(n log n), 각 장르별로 최대 n개의 노래를 정렬
* 공간 복잡도: O(n)
* 주요 공간 사용:
* rank 객체: O(n) - 모든 노래의 정보를 저장
* genreRank 배열: O(n) - 정렬된 장르 정보 저장
* answer 배열: O(n) - 최악의 경우 n/2개의 노래 인덱스 저장
 * 
 * @param {string[]} genres 
 * @param {number[]} plays 
 * @returns {number[]}
 */
// Record 클래스 대신 객체 리터럴 사용
function solution23(genres, plays) {
    /** @type {{count: number, unq: { index:number, plays:number}[]}} */
    const rank = {};

    // 장르별 재생 횟수와 고유번호 기록
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];
        if (!rank[g]) {
            rank[g] = {
                count: p,
                unq: [{ index: i, plays: p }]
            };
        } else {
            const r = rank[g];
            rank[g] = {
                count: r.count + p,
                unq: [...r.unq, { index: i, plays: p }]
            };
        }
    }

    // 배열로 변환하여 정렬
    const buf = Object.values(rank);
    // 장르별 총 재생 횟수로 정렬
    buf.sort((a, b) => b.count - a.count);

    // 각 장르 내의 노래들을 재생 횟수로 정렬
    for (const e of buf) {
        e.unq.sort((a, b) => b.plays - a.plays);
    }

    // 결과 배열 생성
    const ret = [];
    for (const b of buf) {
        let slice = null;
        if (b.unq.length === 1) {
            slice = b.unq.slice(0, 1);
        } else {
            slice = b.unq.slice(0, 2);
        }

        for (const s of slice) {
            ret.push(s.index);
        }
    }

    return ret;
}

function Run23() {
    const r1 = solution23(
        ["classic", "pop", "classic", "classic", "pop"],
        [500, 600, 150, 800, 2500]
    );
    console.log(r1);
    // [4, 1, 3, 0]

    const r2 = solution23(
        ["classic", "classic", "classic"],
        [1, 2, 1]
    );
    console.log(r2);
    // [1, 0]
}

// 실행
Run23();