// https://school.programmers.co.kr/learn/courses/30/lessons/120924
function solution(common) {
  const is등차 = common[2] - common[1] === common[1] - common[0];
  const 차 = common[1] - common[0];
  const 곱 = common[1] / common[0];
  return is등차 ? common[common.length - 1] + 차 : common[common.length - 1] * 곱;
}
