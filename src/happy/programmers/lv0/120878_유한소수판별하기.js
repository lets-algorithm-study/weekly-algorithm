

/*
* [제목] 유한소수 판별하기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120878

* [문제] 
    소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
    분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다.
    유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

    기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
    두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
*/



function getGCD(a, b){
    return (a % b) ? getGCD(b, a % b) : b;
}

function solution(a, b) {
    var answer = 2;

    // 두 수를 나눈 값이 정수일 경우, 유한소수이다.
    if(a % b === 0) return 1;
    
    const gcd = getGCD(b, a);
    
    let tmp = b / gcd;
    
    while(true){
        
        if(tmp / 2 === 1) {
            answer = 1;
            break;
        }
        else if(tmp % 2 === 0){
            tmp = tmp / 2;
            continue;
        }
        
        if(tmp / 5 === 1) {
            answer = 1;
            break;
        }
        else if(tmp % 5 === 0){
            tmp = tmp / 5;
            continue;
        }
        
        break;
        
    }
    return answer;
}