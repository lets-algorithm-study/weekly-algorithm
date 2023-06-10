//https://school.programmers.co.kr/learn/courses/30/lessons/120830
function solution(n, k) {
    const lamb = 12000;
    const soda = 2000;
    const lambSum = n * lamb;
    const sodaSum = k * soda;
    const discount = parseInt(n/10) * soda
    
    return lambSum + sodaSum - discount
}

// tilde 질문
// k-=~~(n/10);
// if (k < 0) k = 0;
// return n*12000+k*2000;