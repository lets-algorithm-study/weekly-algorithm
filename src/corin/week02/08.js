// 08 괄호 짝 맞추기

function solution(s){
  const stack = []; //가상의 빈 통 생성

  for(const c of s){
    if( c === '('){
      //열린 괄호를 만났을 때 배열(가상의 빈 통)에 push 해줌
      stack.push(c);
    }else if( c === ')'){
      if(stack.length === 0) {
        //닫는 괄호를 만났을 때 배열에 아무 것도 없다면 짝이 맞지 않는 괄호 배열임
        console.log('false')
        return false;
      } else{
        //닫는 괄호를 만났을 때 배열 내 괄호 값이 있다면 짝이 맞는 배열임
        stack.pop();
      }
    }
  }

  
  // return stack.length === 0;
  return console.log(stack.length)
}

solution(['(',')','(',')'])