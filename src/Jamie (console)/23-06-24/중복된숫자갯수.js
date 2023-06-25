// https://school.programmers.co.kr/learn/courses/30/lessons/120583
function solution(array, n) {
    let answer = array.filter((element)=> element === n)
    return answer.length;
}
