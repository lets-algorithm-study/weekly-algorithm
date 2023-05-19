https://school.programmers.co.kr/learn/courses/30/lessons/120890
// 배열에 있는 값 중에 주어진 n의 값과 가장 가까운 수를 구하는 문제
const solution = (array, n) => {
  let newArr = [];
  let answer = [];

  // 절대값만 만들기
  array.forEach((item) => {
    newArr.push(Math.abs(item - n));
  })

  // 절대값중에 가장 작은 값
  const min = Math.min(...newArr);

  // 절대값중에 가장 작은 값들을 새로 담아준다 
  // 가까운 값이 여러개인데 절대값으로 계산해서 (4, -4) 이런 값이 있는경우 더 작은 값을 찾아야한다.
  for (let index = 0; index < newArr.length; index++) {
    if (newArr[index] === min) {
      answer.push(array[index]);
    }
  }

  // 그 중에서 가장 작은 값
  return Math.min(...answer);
}