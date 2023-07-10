/**
 문제명 : 멋쟁이 숫자
숫자로만 이루어진 문자열 s가 있습니다. (0 <=  s.length < 1,000)
아래의 조건을 모두 만족하는 숫자를 '멋쟁이 숫자'라고 합니다.

[조건]
1. 길이가 3인 s의 substring을 10진수로 읽은 숫자이다.
2. 각 자리의 숫자가 모두 같다.

구현사항
문자열s를 입력받아 멋쟁이 숫자를 리턴하는 함수를 만들어주세요.

만약, 멋쟁이 숫자가 여러 개 존재하는 경우에는 가장 큰 수를 리턴합니다.
만약, 가장 큰 멋쟁이 숫자가 000이라면 0을 리턴합니다.
만약, 멋쟁이 숫자가 존재하지 않다면 -1을 리턴합니다.

예시 문제
예시 1

입력: s = “12223”
출력: 222
예시 2

입력: s = “111999333”
출력: 999
설명: 111, 333, 999 3가지가 존재하고 999가 제일 크므로 999를 리턴합니다.
예시 3

입력: s = “123”
출력: -1

 */

const input1 = "12223";
const output1 = 222;

const input2 = "111999333";
const output2 = 999;

const input3 = "123"
const output3 = -1

function solution(str){
    const tmp = str.split("");

    let max = -1;
    for(let i =0; i< tmp.length - 2; i++){

        if(tmp[i] === tmp[i + 1] && tmp[i + 1] === tmp[i + 2]){
            let tmp2 = Number(tmp[i] + tmp[i + 1] + tmp[i + 2]);

            if(tmp2 > max) max = tmp2;
        }
    }

    return max;
}

console.log(solution(input1) === output1);
console.log(solution(input2) === output2);
console.log(solution(input3) === output3);