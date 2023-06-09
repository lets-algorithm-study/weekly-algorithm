// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    let xMin = dots[0][0];
    let xMax = dots[0][0];
    let yMin = dots[0][1];
    let yMax = dots[0][1];

    const len = dots.length;

    for (let i = 0; i < len; ++i) {
        const x = dots[i][0];
        if (x < xMin) {
            xMin = x;
        }

        if (x > xMax) {
            xMax = x;
        }

        const y = dots[i][1];
        if (y < yMin) {
            yMin = y;
        }

        if (y > yMax) {
            yMax = y;
        }
    }

    return (xMax - xMin) * (yMax - yMin);
}