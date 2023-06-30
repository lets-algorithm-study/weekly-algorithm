/*
* [제목] 1로 만들기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120869

* [문제] 
    PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
    알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
    spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(spell, dic) {
    var answer = 2;
    
    dic.some((item) => {
        if(spell.length === item.length){
           let result = true;
           
            spell.some((_item) => {
                if(!item.includes(_item)) {
                    result = false;
                    return true;
                }
            })
            
            if(result) {
                answer = 1;
                return true;
            }
        }
    })
    
    return answer;
}