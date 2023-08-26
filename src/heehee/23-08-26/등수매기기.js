function solution(M, N) {
  const averages = score.map((v) => {
    return (v[0] + v[1]) / 2;
  });

  const desc = averages.slice().sort(function (a, b) {
    return b - a;
  });
  const scoreGrade = [...new Set(desc)];

  let cur = 1;
  let gradeCount = 1;
  for (let i = 0; i < scoreGrade.length; i++) {
    cur = gradeCount;
    for (let k = 0; k < averages.length; k++) {
      if (scoreGrade[i] === averages[k]) {
        averages[k] = cur;
        gradeCount = gradeCount + 1;
      }
    }
  }

  return averages;

  // let avg = score.map(v=>(v[0]+v[1])/2);
  // let sorted = avg.slice().sort((a,b)=>b-a);
  // return avg.map(v => sorted.indexOf(v) + 1);
}
