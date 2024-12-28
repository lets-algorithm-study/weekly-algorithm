/**
 * p251. 해시.
 * 21. 할인 행사
 * 
 * 매일 1가지 제품을 할인하는 행사를 함.
 * 할인 제품은 하루에 하나만 구매할 수 있습니다.
 * 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 때에 맞춰
 * 회원가입하고싶음.
 * 
 * 제약 조건
 * 10 <= discount.length <= 100,000 으로 보아
 * O(N^2)는 꿈도 못꿈
 * 
 * TC: O(N + M)
 * [0: discount.length - 10 + 1] 개 -> O(N)
 * 내부 loop의 stride 10 -> O(1)
 * want, number -> O(M)
 * 따라서 O(N + M)
 * 
 * SC: O(N)
 * 내부 10개짜리 object -> O(N)
 * 
 * @param want {string[]} 원하는 제품
 * @param number {number[]} 원하는 제품의 수량
 * @param discount {string[]} 할인하는 제품들
 * @return {number} 원하는 제품을 모두 할인받을 수 있는 회원 등록 날짜의 총 일수, 가능한 날이 없으면 0
 */
function solution(want, number, discount) {
    // 원하는 제품을 모두 할인받을 수 있는 회원등록 날짜 일수 카운터
    let found = 0;
    // 10개씩 묶어 검사를 하므로 마지막 10개는 검사 안함
    const end = discount.length - 10 + 1;
    for (let i = 0; i < end; i++) {
        // 10일간의 할인품목을 담음
        const slice = {};
        // 검사할 일자로 부터 10일간의 할인 품목을 {[할인 품목]: 갯수 } 로 담음
        for (let stride = 0; stride < 10; stride++) {
            const k = discount[i + stride];
            if (!slice[k]) slice[k] = 1;
            else slice[k] += 1;
        }

        let match = true;
        // 원하는 품목과 갯수를 저장해둔 10일간의 할인 품목 해쉬테이블에서 검사
        for (let j = 0; j < want.length; j++) {
            const w = want[j];
            const n = number[j];

            if (slice[w] && slice[w] >= n) continue;
            match = false;
            break;
        }

        if (match) found++;
    }
    return found;
}

console.log("start 21");

const r1 = solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    ["chicken", "apple", "apple", "banana", "rice",
        "apple", "pork", "banana", "pork", "rice", "pot",
        "banana", "apple", "banana"]
);
console.log(r1);

const r2 = solution(
    ["apple"],
    [10],
    ["banana", "banana", "banana", "banana",
        "banana", "banana", "banana", "banana",
        "banana", "banana"]
)
console.log(r2);

const r3 = solution(
    ["a", "b"],
    [1, 9],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "a"]
)
console.log(r3);


console.log("end 21");