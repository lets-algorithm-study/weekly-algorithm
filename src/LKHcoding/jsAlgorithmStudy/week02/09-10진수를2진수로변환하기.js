function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = '';
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001

console.log(answer(10)); // 1010
console.log(answer(27)); // 11011
console.log(answer(12345)); // 11000000111001

function answer(decimal) {
  const stack = [];

  while (decimal > 0) {
    const halfDecimal = decimal / 2;

    const integer = Math.trunc(halfDecimal);

    if (integer === halfDecimal) {
      stack.push(0);
    } else {
      stack.push(1);
    }

    decimal = integer;
  }

  return stack.reverse().join('');
}
