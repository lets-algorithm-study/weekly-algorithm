/*
* [제목] 2의 영역
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/181894

* [문제] 
    정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, arr에 2가 없는 경우 [-1]을 return 합니다.


*/

function solution(arr) {
    let tmp = [];
    arr.forEach((item, i) => {
        if(item === 2){
            tmp.push(i);
        }
    })

    if(tmp.length === 1) return [2];
    else if(tmp.length === 0) return [-1];
    else {
        return arr.slice(tmp[0], tmp[tmp.length - 1] + 1 );
    }
    
}