https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) == -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// 중복제거 방법
// 1. Set()
// 내부적으로 해시 테이블을 사용하여 요소를 저장해 검색 속도가 빠름
// 따라서 중복되는 인덱스를 바로 찾을 수 있음
const test1 = () => {
  const arr = [1, 2, 2, 3];
  const result = [...new Set(arr)]
  return result
}

// 2. filter, indexOf
// 각 요소마다 중복 여부를 호가인하기 위해 반복 검색을 수행함
const test2 = () => {
  const arr = [1, 2, 2, 3];
  const result = arr.filter((v, i) => arr.indexOf(v) === i)
  return result
}