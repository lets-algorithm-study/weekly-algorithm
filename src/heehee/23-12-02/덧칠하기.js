function solution(n, m, section) {
  const wall = [];
  for (let i = 1; i < n + 1; i++) {
    wall.push(!section.includes(i));
  }
  let flag = true;
  const log = console.log;
  let answer = 0;
  log(wall);

  while (flag) {
    const startIndex = wall.indexOf(false);
    if (startIndex == -1) {
      flag = false;
    } else {
      answer++;
      for (let i = 0; i < wall.length; i++) {
        if (i >= startIndex && i <= startIndex + m - 1) {
          wall[i] = true;
        }
      }
    }
  }

  log(wall);

  return answer;
}
