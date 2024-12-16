function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}

function solution(progresses, speeds) {
  var answer = [];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );
  let count = 1;
  let max = days[0];
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= max) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      max = days[i];
    }
  }
  answer.push(count);
  return answer;
}
