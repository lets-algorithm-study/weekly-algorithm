//11. 짝지어 제거하기

function solution (arr){

  //n번째와 n+1번째 스트링이 같으면
  //stack[n]과 stack[n+1] 삭제 
  let stack = arr.split('');

  for( let i = 0; i < stack.length; i++ ){

      // if(stack[i] === stack[i+1]){
      //   stack.splice(i,1)
      //   stack.splice(i,1)
      //   if(stack[i] === stack[i+1]){
      //     stack.splice(i,1)
      //     stack.splice(i,1)
      //     if(stack[i] === stack[i+1]){
      //       stack.splice(i,1)
      //       stack.splice(i,1)
      //       .
      //       .
      //       .
      //     }
      //   }
      // }

    while(i < stack.length && stack[i] === stack[i+1]) {
      stack.splice(i, 2); 
    }

  }

  if(0 < stack.length){
    console.log(stack)
    return console.log(0);
  }else{
    console.log(stack)
    return console.log(1);
  }

}

solution('aaddgg')

//이중반복문으로 풀었음..
//이중반복문으로 풀면 시간복잡도에서 실패할 수 있다. O(N^2)
//splice는 배열을 재구성해야 하므로 비용이 많이 드는 연산

// O(N)인 알고리즘 적용 필요 -> stack 활용
// function solution(arr) {
//   const stack = [];
  
//   for(let char of arr) {
//       if(stack.length && stack[stack.length-1] === char) {
//         //2. 원래 있던 애랑 적재되려는 문자값이랑 같으면 스택에 있는 애 빼버리기
//           stack.pop();
//       } else {
//         //1. 첫번째 문자값은 무조건 stack에 적재. stack.length > 0 조건때문에
//         //3. pop() 되지 못하는 문자값은 그대로 적재.
//           stack.push(char);
//       }
//   }
  
//   return console.log(stack, stack.length === 0 ? 1 : 0)
// }
