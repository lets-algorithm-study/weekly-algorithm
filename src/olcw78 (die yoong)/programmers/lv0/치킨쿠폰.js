function solution(chicken) {
    let res = 0;
    while (chicken >= 10) {
        const coupons = Math.floor(chicken / 10);
        res += coupons;
        chicken = coupons + chicken % 10;
    }

    return res;
}

const res = solution(1999);
console.log(res);