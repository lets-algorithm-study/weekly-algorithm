// https://school.programmers.co.kr/learn/courses/30/lessons/120894
// 진심으로 개시름.. 퇴근하고 배고픈 상태로 시간 날리면서 풀었읍니다..
const table = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];
const tableLen = table.length;

function solution(numbers) {
    let res = "";
    // numbers 를 소거하면서, 결과를 쌓는 방식.
    while (numbers) {
        for (let i = 0; i < tableLen; i++) {
            const cur = table[i];
            if (numbers.startsWith(cur)) {
                res += i.toString();
                numbers = numbers.slice(cur.length);
            }
        }
    }

    return Number(res);
}