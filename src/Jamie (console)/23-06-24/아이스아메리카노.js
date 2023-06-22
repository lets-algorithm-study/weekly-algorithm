//https://school.programmers.co.kr/learn/courses/30/lessons/120819
function solution(money) {
    const americano = 5500;
    return [parseInt(money/americano), money%americano];
}
