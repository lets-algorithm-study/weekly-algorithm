/*
* [제목] 대소문자 바꿔서 출력하기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/181949

* [문제] 
    영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

* [예시] 
    1.
    Input: aBcDeFg
    Output: AbCdEfG

*/


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    const upper = str.toUpperCase().split("");
    
    upper.forEach((item, i) => {
        if(item === str[i]){
            // 이전 단어가 대문자인 경우
            result += item.toLowerCase();
        }else{
            // 이전 단어가 소문자인 경우
            result += item;
        }
    })
    
    console.log(result);
});