https://school.programmers.co.kr/learn/courses/30/lessons/120817
function solution(numbers) {
    var sum = numbers.reduce((a,b) => a+b, 0)
    var sum2 = parseInt(sum);
    var result = sum - sum2

    if(result === 0 || result === 0.5){
       return (sum / numbers.length + result).toFixed(1)
    }else{
       return parseInt(sum / numbers.length)
    }
    // var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
}