
/*
* [제목] 옹알이 (1)


* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120956

* [문제] 
    머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
    조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
    문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/



function solution(babbling) {
    var answer = 0;

    // 조카가 할 수 있는 발음
    let checks = ["aya", "ye", "woo", "ma"];
    
    //
    babbling.forEach((item) => {
        let ok = true;
        
        let tmp = item;
        
        // 단어에서 조카가 할 수 있는 발음을 0으로 바꾼다.
        checks.forEach((_item) => {
            tmp = tmp.replace(_item, "0");
        })
        
        // 바꾼 발음에서 0이 아닌 문자가 있을 경우, 조카가 발음을 할 수 없다.
        tmp.split("").some((x) => {
            if(x !== "0") {
                ok = false;
                return;
            }
        })
        
        if(ok) answer += 1;
    })
    return answer;
}