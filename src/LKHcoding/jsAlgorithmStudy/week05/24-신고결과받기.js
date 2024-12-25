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

  // O(N), where N = report 배열의 길이
  // 겉보기에는 2중 for문이지만 내부 순회의 총합은 전체 신고 횟수(N)를 넘을 수 없음
  for (const userId of id_list) {
    const reportInfo = reportInfoObj[userId];
    let count = 0;

    if (!reportInfo) {
      // 신고한적이 없으면 처리결과 메일 받을게 없다.
      result.push(count);
      continue;
    }

    // 각 유저의 신고 내역을 순회
    // 모든 유저의 신고 내역을 합해도 전체 신고 횟수(N)를 초과할 수 없음
    /**
     * reportInfoObj = {
     *   'muzi': Set{'frodo', 'neo'},     // 2명을 신고
     *   'frodo': Set{'neo'},             // 1명을 신고
     *   'apeach': Set{'muzi', 'frodo'}   // 2명을 신고
     *   'neo': 없음                       // 0명을 신고
     * }
     */
    for (const targetUserId of reportInfo) {
      // 신고당한 사람이 k번 신고당했는지 체크
      if ((reportedCountInfoObj[targetUserId] ?? 0) >= k) {
        count++;
      }
    }

    result.push(count);
  }

  // Time Complexity:
  // R = report 배열의 길이
  // M = id_list의 길이(유저 수)
  // 첫 번째 루프: O(R)
  // 두 번째 루프: O(R)
  // Total: O(R) => O(N)
  return result;
}

console.log(
  answer(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

function solution(id_list, report, k) {
  // key - 신고당한 사람: value - Set(신고한 사람들)
  const reportedToReporters = {};

  // 메일 받을 횟수를 저장할 객체
  const mailCount = {};

  // O(N), N = report.length
  for (const item of report) {
    const [reporter, reported] = item.split(' ');

    if (!reportedToReporters[reported]) {
      reportedToReporters[reported] = new Set();
    }
    reportedToReporters[reported].add(reporter);
  }

  // O(N) - 외부 순회는 최대 신고된 사람 수만큼, 이는 report 길이(N)를 넘을 수 없음
  for (const reported in reportedToReporters) {
    // k번 이상 신고된 경우
    if (reportedToReporters[reported].size >= k) {
      // 신고한 모든 사람들의 메일 카운트 증가
      for (const reporter of reportedToReporters[reported]) {
        // 내부 순회도 신고한 사람 수만큼, 이 역시 총 report 길이(N)의 일부
        // 모든 내부 순회를 합해도 전체 신고 횟수(N)를 넘을 수 없음
        /**
         * reportedToReporters = {
         *   'frodo': Set{'muzi', 'apeach'},     // 2명이 신고
         *   'neo': Set{'frodo', 'muzi'},        // 2명이 신고
         *   'muzi': Set{'apeach'}               // 1명이 신고
         * }
         */
        mailCount[reporter] = (mailCount[reporter] || 0) + 1;
      }
    }
  }

  // O(M) - id_list 순회
  return id_list.map(id => mailCount[id] || 0);
  // Time Complexity:
  // N = report 배열의 길이 (최대 200,000)
  // M = id_list의 길이 (최대 1,000)
  // 첫 번째 루프: O(N)
  // 두 번째 루프: O(N)
  // 마지막 map: O(M)
  // Total: O(N + N + M) = O(N)
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
