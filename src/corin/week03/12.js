//12. 주식 가격
//입출력 예 : 5초의 주가 ~ 이 부분 '1초 유지'는 오타인듯?

// function solution (prices) {
//   let bare = [];
//   let stack = [];
//   let bareVal = 0;

//   //push : 다음 p 가 이전 p 보다 크거나 같으면 stack에 적재 -> '다음 p가 이전 p 보다 작으면' 조건 들어가기전까지 적재된 stack.length 반환 -> 그 stack.length 값을 bare 배결애 적재
//   //다음 p가 이전 p 보다 작으면 1반환 -> bare 배열에 1 적재

//   //bare 배열에 넣을 '주기유지값' 구하는거임

//   //prices.entries() 를 O(N^2) 하면 어케저케 풀 수 있을 것 도 같은데...
//     for(let [index,p] of prices.entries()){
//       if(stack.length > 0 && stack[0] <= p){
//         stack.push(p)
//         if(prices.length - 1 == index){
//           bare.push(stack.length - 1) //맨 앞 비교를 위한 숫자는 빼기위해서 -1
//           console.log(bare)
//         }
//       }else{
//         if(stack.length > 0 && stack[stack.length - 1] > p){
//           bare.push(stack.length)
//         }else{
//           stack.push(p)
//         }
//       }
//     }


// }

function solution(prices){
  const n = prices.length;
  const answer = new Array(n).fill(0) //가격이 떨어지지 않은 기간을 저장할 배열

  //스택을 사용해 이전 가격과 현재 가격을 비교
  // const stack = [0]; //스택 초기화
  const stack = [];
  stack.push(0);
  
  for(let i = 1; i < n; i++){
    while (stack.lenght > 0 && prices[i] < prices[stack[stack.length - 1]]){
      //와 진짜 해괴하다
      //가격이 떨어졌으므로 이전 가격의 기간을 계산
      const j = stack.pop();
      answer[j] = i-j;
    }
    stack.push(i);
  }

  while(stack.length > 0){
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return console.log(answer);
}

solution([1,2,3,2,3])