// 10 괄호 회전하기
//'왼쪽으로 회전'이 무슨 소린지 몰랐음

function solution(s){
  const n =s.length;
  let answer = 0;

  for(let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;

    for (let j = 0; j < n; j ++){

      // 괄호 문자열을 회전시키면서 참조
      const c = s[(i + j) % n];

      if(c === "[" || c === "(" || c === "{" ){
        //열린 괄호는 푸쉬
        stack.push(c);
      }else{
        if(stack.length === 0) {
          //여는 괄호가 없는 경우
          isCorrect = false;
          break;
        }

        //닫힌 괄호는 스택의 top과 짝이 맞는지 비교
        const top = stack[stack.length - 1];
        if(c === "]" && top === "["){
          stack.pop();
        }else if (c === ")" && top === "(" ){
          stack.pop();
        }else if( c === "}" && top === "{"){
          stack.pop();
        }else{
          isCorrect = false;
          break;
        }
      }
    }
    // 모든 괄호의 짝이 맞는 경우
    if (isCorrect && stack.length === 0){
      answer += 1;
    }
  }
  return answer;
}