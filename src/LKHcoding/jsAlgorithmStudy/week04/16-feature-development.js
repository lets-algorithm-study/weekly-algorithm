// https://school.programmers.co.kr/learn/courses/30/lessons/42586

class Queue {
  progresses = [];
  speeds = [];

  front = 0;
  rear = 0;

  constructor(progresses, speeds) {
    // 내부적으로 progresses, speeds를 같이 초기화 하고 사용
    this.progresses = progresses;
    this.rear = progresses.length;
    this.speeds = speeds;
  }

  pop() {
    // progresses 를 하나씩 pop
    return this.progresses[this.front++];
  }

  develop() {
    // 개발 속도에 맞게 전체 증가 시키는 메소드
    this.progresses = this.progresses.map((item, idx) => item + this.speeds[idx]);
  }

  checkCompleted() {
    // 큐의 가장 앞부분이 개발 완료인지 리턴하는 메소드
    return this.progresses[this.front] >= 100;
  }

  size() {
    // 큐의 사이즈 크기 리턴
    return this.rear - this.front;
  }
}
function answer(progresses, speeds) {
  const answer = [];

  const queue = new Queue(progresses, speeds);

  let cnt = 0;
  while (true) {
    // 개발 완료 여부 체크
    if (queue.checkCompleted()) {
      // 개발 완료면 팝하고
      queue.pop();
      // cnt 증가
      cnt++;
      continue;
    }
    if (cnt > 0) {
      // cnt 가 0이 아닐때만 push
      // 개발 완료 될때까지 기다렸다가 answer 에 push 해야함
      answer.push(cnt);
      cnt = 0;
    }

    if (queue.size() === 0) {
      // 큐에 든거 없으면 이탈
      break;
    }

    // 개발 진행
    queue.develop();
  }

  return answer;
}

const result = answer([93, 30, 55], [1, 30, 5]);
console.log(result);

function solution(progresses, speeds) {
  const answer = [];

  const n = progresses.length;

  // 각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  let count = 0; // 배포될 작업의 수 카운트
  let maxDay = daysLeft[0]; // 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      // 배포 가능일이 가장 늦은 배포일보다 빠르면
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);
  return answer;
}
