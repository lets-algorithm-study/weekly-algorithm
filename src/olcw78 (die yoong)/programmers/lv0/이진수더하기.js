// 1001
// 1111

function toDecimal(num) {
    let acc = 0;
    for (let i = 0; i < num.length; i++) {
        acc += Number(num[i]) * Math.pow(2, num.length - 1 - i);
    }
    return acc;
}

function toBinary(num) {
    let acc = '';

    while (num > 0) {
        acc = num % 2 + acc;
        num = Math.floor(num / 2);
    }

    return acc;
}

function solution(b1, b2) {
    return (parseInt(b1, 2) + parseInt(b2, 2)).toString(2);
}

const d1 = toDecimal('10');
const d2 = toDecimal('11');
const sum = d1 + d2;
const a = toBinary(sum);