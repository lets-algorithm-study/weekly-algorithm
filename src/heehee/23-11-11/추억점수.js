function solution(name, yearning, photo) {
  const scoreMap = new Map();

  for (let i = 0; i < name.length; i++) {
    scoreMap.set(name[i], yearning[i]);
  }

  const answer = [];
  photo.forEach((v) => {
    let acc = 0;

    for (let i = 0; i < v.length; i++) {
      if (scoreMap.get(v[i])) {
        acc = acc + scoreMap.get(v[i]);
      }
    }
    answer.push(acc);
  });

  return answer;
}
