https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) answer += i;
    }
    return answer;
    
// 가우스의 덧셈
//   case1
      // var half = Math.floor(n/2);
      // return half*(half+1);

//   case2
      // var answer = 0;  
      // for(let i=2 ; i<=n ; i+=2)
          // answer += i;
      // return answer;
  }