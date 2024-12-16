/**
 * constraint:
 * len(progresses), len(speeds) <= 100
 * progress[i] < 100
 * speeds[i] <= 100
 * 배포는 하루에 한 번. 하루의 끝에 이루어진다.
 *
 * 100 - progress = rest
 * rest / speed = day to complete
 * 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어짐.
 * @param progresses {number[]} 배포 순서대로 작업 진도
 * @param speeds {number[]} 각 작업의 개발 속도
 */
function solution(progresses, speeds) {
    // forof 로 돌리게 progresses, speeds 묶기 (zip)
    const zip = progresses.map((p, i) => ({p, s: speeds[i]}));
    // 배포 가능한 날짜를 계산
    // expectedDate = ceil((100 - progress) / speed)
    const expected = zip.map(({p, s}) => Math.ceil((100 - p) / s));
    const release = [];
    let cursor = 0;
    // expected 모두 소진.
    while (expected.length > 0) {
        // 뒤가 작거나 같은 동안 모두 앞으로 빼기
        const cur = expected.shift();
        release[cursor] = 1;
        while (cur >= expected[0]) {
            release[cursor]++;
            expected.shift();
        }
        cursor++;
    }
    return release;
}


// 93-1 -> 7일후 배포
// 100 - 93 = 7 / 1 = 7
// 30-30 -> 3일후 배포
// 100 - 30 = 70 / 30 = 2.x
// 55-5 -> 9일후 배포
// 100 - 55 = 45 / 5 = 9
const r1 = solution(
    [93, 30, 55],
    [1, 30, 5]
);
console.log(r1);

// 100 - 95 / 1 = 5
// 100 - 90 / 1 = 10
// 100 - 99 / 1 = 1
// 100 - 99 / 1 = 1
// 100 - 80 / 1 = 20
// 100 - 99 / 1 = 1
const r2 = solution(
    [95, 90, 99, 99, 80, 99],
    [1, 1, 1, 1, 1, 1]
);
console.log(r2);