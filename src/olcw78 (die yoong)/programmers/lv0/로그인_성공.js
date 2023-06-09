// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution([id, pw], db) {
    const len = db.length;

    let matchId = false;
    let matchPw = false;
    for (let i = 0; i < len; ++i) {
        const [$id, $pw] = db[i];
        if (id === $id) {
            matchId = true;
        }

        if (pw === $pw) {
            matchPw = true;
        }

        if (matchId && matchPw) {
            return "login";
        }

        if (matchId && !matchPw) {
            return "wrong pw";
        }

        matchId = false;
        matchPw = false;
    }

    return "fail";
}