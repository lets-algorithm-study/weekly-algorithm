
// 1 4    3 3
// 3 2    3 3     1x3 + 4x3 = 15  15
// 4 1                        15  15
// 3x2    2x2 =>              15  15


/**
 * @param arr1 {number[][]}
 * @param arr2 {number[][]}
 */
function solution(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(new Array(arr1[0].length).fill(0));
    }

    for (let x = 0; x < arr1.length; x++) {
        for (let y = 0; y < arr2[0].length; y++) {
            for (let z = 0; z < arr1.length; z++) {
                const sum = arr1[x][z] * arr2[z][y];
                result[x][y] += sum;
            }
        }
    }

    return result;
}

const r1 = solution(
    [[1, 4], [3, 2], [4, 1]],
    [[3, 3], [3, 3]]
);
console.log("r1: ", r1);

const r2 = solution(
    [[2, 3, 2], [4, 2, 4], [3, 1, 4]],
    [[5, 4, 3], [2, 4, 1], [3, 1, 1]]
);
console.log("r2: ", r2);

