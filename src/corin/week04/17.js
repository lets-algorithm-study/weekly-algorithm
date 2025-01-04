// 17

function solution (goal, arrA, arrB) {

  let stack = [];

  for(let i = 0; i < goal.length; i++) {
    //goal 첫 인덱스에 있을 때 arrA, arrB 첫 인덱스 중 매치되는 게 있는지
    if(goal[i] == arrA[i] && arrA[i] ){
      
      stack.push(goal[i]);
    }else if(goal[i] == arrB[i] && arrB[i]){
      stack.push(goal[i]);
      
    }else{
      console.log('no')
      return false;
    }
  }


}

solution(['a','b','c'], ['a'], ['b','c']);