
/*
* [제목] 최빈값 구하기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120812

* [문제] 
    최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
    */
   
function solution(array) {
    var answer = 0;
    let max = 0;
    let isDuplicate =false;
    
    const tmp = [...new Set(array)];
    
    tmp.some((item) => {
        let count = 0;
        array.forEach((_item) => {if(item === _item) count++;})
        
        if(count > max) {
            max = count;
            isDuplicate = false;
            answer = item;
        }else if (count === max) isDuplicate = true;
    })
    
    return isDuplicate ? -1 : answer;
}