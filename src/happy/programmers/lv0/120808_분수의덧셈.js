

/*
* [제목] 분수의 덧셈
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120808

* [문제] 
    첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
    두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

    0 <numer1, denom1, numer2, denom2 < 1,000
*/

function getGCD(a, b){
    // 유클리드 호제법
    return (a % b)? getGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let son = denum1*num2 + denum2*num1;
    let mother = num1 * num2;
    let gcd = getGCD(son, mother); //최대공약수

    return [son/gcd, mother/gcd];
}