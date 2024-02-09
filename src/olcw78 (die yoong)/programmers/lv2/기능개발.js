// https://school.programmers.co.kr/learn/courses/30/lessons/42586

/**
 * @param {number[]} progresses
 * @param {number[]} speeds
 * @return {number}
 */
function solution(progresses, speeds) {
  // 100 - progress = rest
  // rest / speed = day to complete

  const days = progresses.map((progress, i) => {
    const rest = 100 - progress;
    return Math.ceil(rest / speeds[i]);
  });

  const res = [];
  let cursor = 0;
  while (days.length > 0) {
    res.push(1);
    const d = days.shift();
        
    while (d >= days[i]) {
      days.shift();
      ++res[cursor];
    }

    ++cursor;
  }

  return res;
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
