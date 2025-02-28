// https://school.programmers.co.kr/learn/courses/30/lessons/120843
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];

  // let answer = null;
  // let count = 1;
  // for (let i = 0; count <= k; ) {
  //   if (typeof numbers[i] === 'number') {
  //     answer = numbers[i];
  //     i += 2;
  //     count++;
  //   } else {
  //     // k -= i / 2;
  //     i = i - numbers.length;
  //   }
  // }
  //
  // return answer;
}

// [1, 2, 3, 4]	2	3
// [1, 2, 3, 4, 5, 6], 5  3
// [1, 2, 3, 4, 5], 5  4

solution([1, 2, 3, 4, 5], 5);
