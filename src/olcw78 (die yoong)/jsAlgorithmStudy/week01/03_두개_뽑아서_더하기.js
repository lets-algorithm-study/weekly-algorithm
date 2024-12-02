/**
 * @param numbers {number[]}
 */
function solution(numbers) {
    const result = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (i === j) continue;

            const sum = numbers[i] + numbers[j];
            if (!result.has(sum)) {
                result.add(sum);
            }
        }
    }

    const arr = [...result];
    arr.sort((b, a) => b - a);
    return arr;
}

const r1 = solution([2, 1, 3, 4, 1]);
console.log(r1);

const r2 = solution([5, 0, 2, 7]);
console.log(r2);
