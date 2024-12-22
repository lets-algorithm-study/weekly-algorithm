/**
 * constraint
 * 1 <= cards1.length, cards2.length <= 10
 * 1 <= cards1[i].length, cards2[i].length <= 10
 * cards1, cards2 에는 서로 다른 단어만 있음
 *
 * 2 <= goal.length <= cards1.length + cards2.length
 * 1 <= goal[i].length <= 10
 * goal의 원소는 cards1, cards2의 원소들로만 이루어져 있음
 *
 * cards1 과 cards2 를 이용하여 goal을 만들 수 있는지 확인
 *
 * TC: O(N) N은 goal의 길이
 * @param cards1 {string[]}
 * @param cards2 {string[]}
 * @param goal {string[]}
 * @return {string}
 */
function solution(cards1, cards2, goal) {
    while (goal.length > 0) {
        const c = goal[0];
        // cards1과 cards2에서 한장씩 뽑아보기. 뽑는 순서는 맨앞부터.
        if (cards1.length > 0 && c === cards1[0]) {
            cards1.shift();
            goal.shift();
        } else if (cards2.length > 0 && c === cards2[0]) {
            cards2.shift();
            goal.shift();
        } else { // cards1나 cards2에서 하나라도 못뽑으면 실패!
            return 'No';
        }
    }
    // 여기까지 왔다는건 goal에 있는 단어들을 모두 뽑을 수 있었다는 이야기로 성공~
    return 'Yes';
}

const r1 = solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
)
console.log(r1);

const r2 = solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
)
console.log(r2);

const r3 = solution(
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['a', 'd', 'f']
)
console.log(r3);


const r4 = solution(
    ['a', 'b', 'c'],
    ['d'],
    ['d', 'b']
)
console.log(r4);


const r5 = solution(
    ['def', 'bcd'],
    ['b', 'c', 'd'],
    ['bcd']
)
console.log(r5);

const r6 = solution(
    ['a', 'd'],
    ['a', 'd', 'c'],
    ['a', 'd', 'c', 'a', 'd']
)
console.log(r6);

const r7 = solution(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["string", "or", "integer"],
    ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
);
console.log(r7);
