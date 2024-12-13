// 09 10진수를 2진수로 변환하기

function makeDecimalToBinary(decimal){
  let stack = [];
  // stack.push(Math.trunc(decimal) % 2)
  // stack.push(Math.trunc(decimal/2) % 2)
  // stack.push(Math.trunc(decimal/2/2) % 2)
  // stack.push(Math.trunc(decimal/2/2/2) % 2)
  // stack.push(Math.trunc(decimal/2/2/2/2) % 2)

  while(decimal >= 1){
    stack.push(Math.trunc(decimal) % 2)
    decimal = decimal/2
  }

  // return console.log(...stack.reverse());
  return console.log(stack.reverse().join(''));
}

makeDecimalToBinary(10);


