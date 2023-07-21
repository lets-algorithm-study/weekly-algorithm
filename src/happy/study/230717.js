/**
 * Q. 1
    매겨변수 name(string)을 받아와서 사용자의 성을 제거하고 이름을 추출하는 getName 함수를 만드시오.
    (만약에 name이 3글자가 아닐경우 그대로 반환한다. ex.4 참고)

    ex.1) name="이냥냥" >>> "냥냥"
    ex.2) name="윤쿠키" >>> "쿠키"
    ex.3) name="콩콩이" >>> "콩이"
    ex.4) name="두부" >>> "두부"
 */

// S. 1 - slice 사용시, 답안
function getName(name) {
    if (name.length === 3) return name.slice(1);
    else return name;
}

// S. 1 - forEach 사용시, 답안
function getName2(name) {
    if (name.length !== 3) return name;

    const nameArray = name.split("");
    let result = "";
    nameArray.forEach((item, index) => {
        if (index !== 0) result += item;
    });

    return result;
}

/**
 * Q. 2
    매개변수 arr(number[], 숫자형 배열)을 받아와서 배열의 길이를 반환하는 getArrayLength 함수를 만드시오.
    (단, arr.length 사용 불가)

    ex.1) arr = [1, 2, 3, 4] >>> 4
    ex.2) arr = [1, 2, 3, 4, 5, 6] >>> 6
 */

// S. 2 - while 사용시, 답안
function getArrayLength(arr) {
    let i = 0;
    while (arr[i]) {
        i++;
    }

    return i;
}

// S. 2 - forEach 사용시, 답안
function getArrayLength2(arr) {
let i = 0;
arr.forEach((item) => {
    i++;
});

return i;
}

/**
 * Q. 3
    매개변수 arr(number[])을 받아와서 2 n + 1 번째의 인덱스의 원소의 값마다 자신의 인덱스를 곱한 배열을 반환하는 changeArray 함수를 만드시오.
    (n >= 0)

    ex. 1) arr = [1, 2, 3, 4, 5] >>> [1, 2, 3, 12, 5]
    ex. 2) arr = [2, 4, 6, 8, 10, 12, 14] >>> [2, 4, 6, 24, 10, 60, 14]
    ex. 3) arr = [1, 3, 5, 9] >>> [1, 3, 5, 27]
 */

// S. 3 - for 사용시, 답안
function changeArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) result.push(arr[i] * i);
        else result.push(arr[i]);
    }

    return result;
}

// S. 3 - forEach 사용시, 답안
function changeArray2(arr) {
    let result = [];
    arr.forEach((item, i) => {
        if (i % 2 === 1) result.push(item * i);
        else result.push(item);
    });

    return result;
}

// S. 3 - map 사용시, 답안
function changeArray3(arr) {
    let result = arr.map((item, i) => {
        if (i % 2 === 1) return item * i;
        else return item;
    });

    return result;
}

/*
Q.4
    매개변수 arr(number[]), n(number)를 받아오고 n만큼 배열 arr을 반복해서 반환하는 multipleArray 함수를 만드시오.

    ex. 1) arr = [1, 2, 3, 4], n = 3 >>> [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4] 
    ex. 2) arr = [1, 2, 3, 4, 5], n = 1 >>> [1, 2, 3 ,4, 5] 
    ex. 3) arr = [0], n = 10 >>> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
*/

// S. 4 - 이차원 반복문
function multipleArray(arr, n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < arr.length; k++) {
        result.push(arr[k]);
        }
    }

    return result;
}

// S. 4 - 일차원 반복문, length 활용
function multipleArray2(arr, n) {
    let result = [];

    for (let i = 0; i < arr.length * n; i++) {
        result.push(arr[i % arr.length]);
    }

    return result;
}

// S. 4 - join, repeat, split 사용
function multipleArray3(arr, n) {
    return arr
        .join("")
        .repeat(n)
        .split("")
        .map((item) => Number(item));
}
