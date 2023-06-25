//https://school.programmers.co.kr/learn/courses/30/lessons/120910
function solution(n, t) {
    var answer = n;
    for(let i=0; i<t; i++){
        answer = answer * 2
    }
    return answer
}

function solution(n, t) {
    return n << t;
}

function solution(n, t) {
    while (t-- > 0) n*=2;
    return n;
}

function solution(n, t) {

    return n*Math.pow(2,t);
}
