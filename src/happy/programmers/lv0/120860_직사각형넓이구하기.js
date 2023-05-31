
/*
* [제목] 직사각형 넓이 구하기
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120860

* [문제] 
    2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
    직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
    직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

    제한사항
    dots의 길이 = 4
    dots의 원소의 길이 = 2
    -256 < dots[i]의 원소 < 256
    잘못된 입력은 주어지지 않습니다.
*/

function solution(dots) {
    var answer = 0;
    
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    const _x1 = Math.min(x1, x2, x3, x4);
    const _x2 = Math.max(x1, x2, x3, x4);
    const _y1 = Math.min(y1, y2, y3, y4);
    const _y2 = Math.max(y1, y2, y3, y4);
    
    return (_x2 - _x1) * (_y2 - _y1);
}