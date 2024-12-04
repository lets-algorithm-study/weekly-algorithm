function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) answer.push(numbers[i] + numbers[j]);
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
}

// set이 나은건가 배열에서 바로 찾는게 나은건가

// function solution(numbers) {
//   const temp = []
//
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       temp.push(numbers[i] + numbers[j])
//     }
//   }
//
//   const answer = [...new Set(temp)]
//
//   return answer.sort((a, b) => a - b)
// }
