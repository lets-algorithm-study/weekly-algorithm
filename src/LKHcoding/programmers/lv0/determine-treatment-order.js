// https://school.programmers.co.kr/learn/courses/30/lessons/120835
function solution(emergency) {
  // 깊은복사
  let sortedList = [...emergency]
  // 정렬
  sortedList.sort((a,b) => b - a);
  // index 찾아서 배열만들기
  return emergency.map(item => sortedList.indexOf(item) + 1);
}
