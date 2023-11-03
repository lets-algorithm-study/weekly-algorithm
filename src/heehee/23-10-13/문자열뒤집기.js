function solution(my_string) {
    const arry = my_string.split('')
    const length = arry.length;
    let answer = '';
    
    for(let i = 0; i<length; i++) {
        answer = answer + arry.pop();
    }
    return answer;
}