// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    const counter = new Map();
    for (const ch of s) {
        if (!counter.has(ch)) {
            counter.set(ch, 1);
            continue;
        }

        counter.set(ch, counter.get(ch) + 1);
    }

    const asArr = Array.from(counter);
    const unq = asArr.filter(([_, count]) => count === 1);
    unq.sort();
    const res = unq.map(([$0]) => $0).join("");
    
    return res;
}