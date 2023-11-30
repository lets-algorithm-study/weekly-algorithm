
/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120921
 * @param {string[]} A
 * @param {string[]} B
 * @returns {number} A 를 밀어서 B 가 될 수 있다면 밀어야하는 최소 횟수, 불가능하다면 -1
 */
function solution(A, B) {
    if (A === B) return 0;
    
    A = A.split('');    
    
    const rotateMaxCount = A.length;    
    
    let rotate = 0;
    while (rotate < rotateMaxCount) {
        A.unshift(A.pop());
        rotate += 1;
        
        const str = A.join("");
        if (str === B)
            return rotate;
    }
    
    rotate = 0;
    while (rotate < rotateMaxCount) {
        A.push(A.shift());
        rotate += 1;
        
        const str = A.join("");
        if (str === B)
            return rotate;
    }
        
    
    return -1;
}