/**
 * @param enroll {string[]}
 * @param referral {string[]}
 * @param seller {string[]}
 * @param amount {number[]}
 * @returns {number[]}
 */
function solution(enroll, referral, seller, amount) {
    const ret = Array.from({length: referral.length}).fill(0);
    const PRICE = 100;
    for (let i = 0; i < seller.length; i++) {
        let j = enroll.findIndex(x => x === seller[i]);// 첫 사람 인덱스, 이름
        let name = enroll[j];
        let price = amount[i] * PRICE// 첫 가격 90%만 가져감
        price -= Math.floor(price * 0.1);
        ret[j] += price;

        // - 가 나오면 반복 종료
        while (name && name !== "-") {
            name = referral[j];// 이어진 사람 가져오기
            j = enroll.findIndex(x => x === name);// 다음 이어질 사람의 인덱스 찾기
            // -> 못찾으면 center(민수) 선택된 것
            if (j === -1) break;

            const rest = Math.floor(price * 0.1);// 10% 만 연결된 사람들에게 줌
            price = rest; // 10%의 다음가격에서 다시 계산을 함.
            ret[j] += rest;
        }
    }
    return ret;
}

const r1 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
);
console.log(r1); // [360, 958, 108, 0, 450, 18, 180, 1080]

const r2 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
);
console.log(r2); // [0, 110, 378, 180, 270, 450, 0, 0]

const r3 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "sam"],
    [2, 3]
);
console.log(r3); // [0, 110, 378, 180, 270, 450, 0, 0]

const r4 = solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "sam", "sam"],
    [2, 3, 4]
);
console.log(r4); // [0, 110, 378, 180, 270, 450, 0, 0]
