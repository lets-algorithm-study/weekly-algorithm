/**
*https://school.programmers.co.kr/learn/courses/30/lessons/181880
 */ 

function solution(num_list) {
    let count = 0;
    let answer = 0;
    for(let i=0; i<num_list.length; i++){
        while(num_list[i] > 1){
            if(num_list[i] % 2 === 0){
               num_list[i]  = num_list[i] / 2
                count = count + 1
            }else{
                num_list[i]  = (num_list[i] - 1 ) / 2
                count = count + 1
            }
        }
    }
    return count;
}
