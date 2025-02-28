// https://school.programmers.co.kr/learn/courses/30/lessons/42579

/**
 * 전체 시간복잡도: O(n log n)
 * n은 입력 배열의 길이
 */
function answer(genres, plays) {
  // 각 장르별로 플레이타임과 idx를 그룹핑
  const genrePlayTimeWithIdxGroupObj = {};

  // 각 장르별 우선순위 구하기 위한 obj
  const genrePlayTimeObj = {};

  // 시간복잡도: O(n) - 배열을 한 번 순회
  for (const [idx, genre] of genres.entries()) {
    if (!Array.isArray(genrePlayTimeWithIdxGroupObj[genre])) {
      genrePlayTimeWithIdxGroupObj[genre] = [];
    }

    // 장르별로 푸시
    genrePlayTimeWithIdxGroupObj[genre].push({ idx, playTime: plays[idx] });

    // 장르별 플레이타임 합산
    genrePlayTimeObj[genre] = (genrePlayTimeObj[genre] ?? 0) + plays[idx];
  }

  // 장르 우선순위 구하기
  // 시간복잡도: O(k log k), k는 unique한 장르의 수
  const sortedGenres = Object.keys(genrePlayTimeObj).sort((a, b) => {
    return genrePlayTimeObj[b] - genrePlayTimeObj[a];
  });

  // 그룹핑된 장르별 정보를 플레이타임 기준으로 정렬
  // 시간복잡도: O(n log n) - 최악의 경우(모든 곡이 같은 장르일 때)
  Object.entries(genrePlayTimeWithIdxGroupObj).forEach(([key, value]) => {
    genrePlayTimeWithIdxGroupObj[key] = value.sort((a, b) => {
      if (a.playTime === b.playTime) {
        return a.idx - b.idx;
      }

      return b.playTime - a.playTime;
    });
  });

  const result = [];

  // 시간복잡도: O(k) - k는 장르의 수
  for (const genre of sortedGenres) {
    genrePlayTimeWithIdxGroupObj[genre].slice(0, 2).forEach(item => {
      result.push(item.idx);
    });
  }

  // 총 시간복잡도:
  // O(n) + O(k log k) + O(n log n) + O(k)
  // = O(n log n) (k ≤ n 이므로)
  return result;
}

console.log(
  answer(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])
);
