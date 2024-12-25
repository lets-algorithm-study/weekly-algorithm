// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function answer(id_list, report, k) {
  // key 가 신고자 user id, value가 신고대상 배열인 obj
  const reportInfoObj = {};

  // key 가 각 user id, value가 신고받은 count 인 obj
  const reportedCountInfoObj = {};

  // O(R), where R = report 배열의 길이
  for (const item of report) {
    const [userId, reportedId] = item.split(' ');

    if (!reportInfoObj[userId]) {
      reportInfoObj[userId] = new Set();
    }

    if (!reportInfoObj[userId].has(reportedId)) {
      // 다중신고가 가능해도 각 유저별로 1번씩만 신고가 가능하다.
      // 이때문에 reportInfoObj[userId] 는 set을 썼지만 여기는 수를 세야 하기 때문에
      // 직접 체크
      reportedCountInfoObj[reportedId] = (reportedCountInfoObj[reportedId] ?? 0) + 1;
    }

    reportInfoObj[userId].add(reportedId);
  }

  const result = [];

  // O(N) * O(N) = O(N²), where N = id_list의 길이
  for (const userId of id_list) {
    const reportInfo = reportInfoObj[userId];
    let count = 0;

    if (!reportInfo) {
      // 신고한적이 없으면 처리결과 메일 받을게 없다.
      result.push(count);
      continue;
    }

    // 신고 내역을 순회
    for (const targetUserId of reportInfo) {
      // 신고당한 사람이 k번 신고당했는지 체크
      if ((reportedCountInfoObj[targetUserId] ?? 0) >= k) {
        count++;
      }
    }

    // Time Complexity: O(N²)
    // R = report 배열의 길이
    // N = id_list의 길이(유저 수)
    // 첫 번째 루프: O(R)
    // 두 번째 루프: O(N²)
    // Total: O(R + N²) => O(N²)
    result.push(count);
  }

  return result;
}

console.log(
  answer(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
