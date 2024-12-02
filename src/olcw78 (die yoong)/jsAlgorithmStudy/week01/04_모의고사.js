/**
 * @param answers {number[]}
 */
function solution(answers) {
    const s1 = [1, 2, 3, 4, 5];
    const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let match1 = 0, match2 = 0, match3 = 0;

    for (let i = 0; i < answers.length; i++) {
        const cur = answers[i];
        if (s1[i % s1.length] === cur) match1++;
        if (s2[i % s2.length] === cur) match2++;
        if (s3[i % s3.length] === cur) match3++;
    }

    const answer = [];
    const maxScore = Math.max(match1, match2, match3);
    if (maxScore === match1) answer.push(1);
    if (maxScore === match2) answer.push(2);
    if (maxScore === match3) answer.push(3);

    return answer;
}

const r1 = solution([1, 2, 3, 4, 5])
console.log(r1)

const r2 = solution([1, 3, 2, 4, 2])
console.log(r2)

