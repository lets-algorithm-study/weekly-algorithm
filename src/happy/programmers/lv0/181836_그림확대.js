/*
* [제목] 마지막 두 원소
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/181836

* [문제] 
    직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
    이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때,
    이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

    1 ≤ picture의 길이 ≤ 20
    1 ≤ picture의 원소의 길이 ≤ 20
    모든 picture의 원소의 길이는 같습니다.
    picture의 원소는 '.'과 'x'로 이루어져 있습니다.
    1 ≤ k ≤ 10

*/

function solution(picture, k) {
    var answer = [];
    
    picture.forEach((item, i) => {
        let tmp = "";
        
        // x축 라인 확대
        item.split("").forEach((_item) => {
            tmp += _item.repeat(k);
        })
        
        // y축 라인 확대
        for(let t = 0; t < k; t++){
            answer.push(tmp);
        }
    })

    return answer;
}