https://school.programmers.co.kr/learn/courses/30/lessons/42576

const solution = (participant, completion) => {
  // 선수들, 완주한 선수들 정렬
  participant.sort()
  completion.sort()
  for (let i = 0; i < participant.length; i++) {
    // 완주하지 못한 선수
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}