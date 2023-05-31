
/*
* [제목] 다항식 더하기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120863

* [문제] 
    한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
    다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
    덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
    동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
    같은 식이라면 가장 짧은 수식을 return 합니다.

*/

function solution(polynomial) {
    const tmp = polynomial.split(' ');
    
    let a = 0;
    let b = 0;
    
    tmp.forEach((item) => {
        if(item !== '+'){
            if(item.includes('x')){
                const [xValue, _] = item.split("x");
                a += xValue === "" ? 1 : Number(xValue);
            }else{
                b += Number(item);
            }
        }
    })
    
    let stringA = a === 0 ? '' : `${a === 1 ? "" : a}x`;
    let sign = a === 0 || b === 0 ? '' : ' + '
    let stringB = b === 0 ? '' : `${b}`;
    return stringA + sign + stringB;
}