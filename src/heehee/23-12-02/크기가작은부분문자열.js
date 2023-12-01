function solution(t, p) {
  const pLength = p.length;
  const cacheTemp = [];
  let answer = 0;

  for (let i = 0; i < t.length - pLength + 1; i++) {
    cacheTemp.push(t.substring(i, pLength + i));
  }
  for (let j = 0; j < cacheTemp.length; j++) {
    if (cacheTemp[j] <= p) {
      answer++;
    }
  }

  return answer;
}
