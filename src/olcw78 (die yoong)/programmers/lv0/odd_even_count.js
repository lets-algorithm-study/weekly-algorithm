// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// in > [1, 2, 3, 4, 5]
// out > [2, 3]
function solution(num_list) {
  let odd = 0;
  let even = 0;

  const len = num_list.length;
  for (let i = 0; i < len; ++i) {
    if (num_list[i] % 2 !== 0) {
      ++odd;
    }
  }

  for (let i = 0; i < len; ++i) {
    if (num_list[i] % 2 === 0) {
      ++even;
    }
  }

  return [ even, odd ];
}

// #2
function solution(num_list) {
  let even = 0;
  const len = num_list.length;
  for (let i = 0; i < len; ++i) {
    if (num_list[i] % 2 === 0) {
      ++even;
    }
  }

  return [ even, len - even ];
}