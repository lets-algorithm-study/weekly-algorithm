//https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution(angle) {
    // return angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1
     return [0, 90, 91, 180].filter(x => angle>=x).length;
}
