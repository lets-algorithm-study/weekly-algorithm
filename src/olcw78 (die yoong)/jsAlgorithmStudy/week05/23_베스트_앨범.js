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
function solution(genres, plays) {
    // 장르별 총 재생 횟수와 곡 정보를 저장할 객체
    /** @type {{ count:number, songs: { index:number, plays:number }[] }} */
    const rank = {};

    // 데이터 구성
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];
        if (!rank[g]) {
            rank[g] = {
                count: p,
                songs: [{ index: i, plays: p }]
            };
        } else {
            rank[g].count += p;
            rank[g].songs.push({ index: i, plays: p });
        }
    }

    // 장르별 재생 횟수로 정렬된 배열 생성
    const genreRank = Object.values(rank).sort((a, b) => b.count - a.count);

    // 결과 배열 생성
    const answer = [];
    for (const genre of genreRank) {
        // 각 장르 내에서 노래들을 재생 횟수로 정렬
        genre.songs.sort((a, b) => b.plays - a.plays);

        // 상위 2개 곡의 인덱스만 결과 배열에 추가
        answer.push(genre.songs[0].index);
        if (genre.songs.length > 1) {
            answer.push(genre.songs[1].index);
        }
    }

    return answer;
}

// 테스트
function run() {
    console.log(
        solution(
            ["classic", "pop", "classic", "classic", "pop"],
            [500, 600, 150, 800, 2500]
        )
    ); // [4, 1, 3, 0]

    console.log(
        solution(
            ["classic", "classic", "classic"],
            [1, 2, 1]
        )
    ); // [1, 0]
}

run();