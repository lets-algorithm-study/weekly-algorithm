// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// 제 풀이
function solution(my_str, n) {
    my_str = my_str.split("");
    const res = [];

    while (my_str.length > 0) {
        const buf = [];
        for (let i = 0; i < n; ++i) {
            buf.push(my_str.shift());
        }

        res.push(buf.join(""));
    }

    return res;
}

// 남 1
function solution(my_str, n) {
    const res = [];
    const len = my_str.length;
    for (let i = 0; i < len; i += n) {
        res.push(my_str.slice(i, i + n));
    }

    return res;
}

// 남 2
function solution(my_str, n) {
    const answer = [];
    const len = my_str.length;
    for (let i = 0; i < len; i += n) {
        answer.push(my_str.substr(i, n));
    }

    return answer;
}