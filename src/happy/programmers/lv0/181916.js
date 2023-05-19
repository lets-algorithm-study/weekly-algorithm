/*
* [제목] 주사위 게임 3
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/181916

* [문제] 
    1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

    네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
    세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
    주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
    어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
    네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
    네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

* [예시] 
    1.
    Input: 2, 2, 2, 2
    Output: 2222

    2.
    Input: 4, 1, 4, 4
    Output: 1681

    3.
    Input: 6, 3, 3, 6
    Output: 27

    4.
    Input: 2, 5, 2, 6
    Output: 30

    a, b, c, d는 1 이상 6 이하의 정수입니다.
*/

function solution(a, b, c, d) {
    var answer = 0;
    /*
    CASE 1. 주사위 4개 p 값으로 모두 같다면 >>> 1111 x p
    CASE 2. 주사위 3개 p 값으로 같고 나머지 1개 q 이면 >>> (10 * p + q)^2
    CASE 3. 주사위 2개 p 값으로 같고 다른 주사위 2개 q 값으로 같으면 >>> (p + q) x |p - q|
    CASE 4. 주사위 2개 같고 나머지 다른 2개 주사위가 각각 q, r이면 >>> q * r
    CASE 5. 4개 주사위가 모두 다르면 >>> 가장 작은 수
    */
    
    // 받아온 인자들을 배열로 넣음
    let tmpArr = [a, b, c, d];
    
    // 각 원소들을 key, value로 넣음
    let tmpObj = {};
    
    // key는 값, value: 중복된 카운트
    tmpArr.forEach((item) => {
        if(tmpObj[item]) tmpObj[item] += 1;
        else tmpObj[item] = 1;    
    })
    
    // 중복되는 숫자의 최고 카운트
    const maxCount = Math.max(...Object.values(tmpObj));
    const minCount = Math.min(...Object.values(tmpObj));
    
    if(maxCount === 4){
        // CASE 1 : 4개가 중복일 경우, 하나의 값만 나오기 때문에 첫번째 키값을 가져옴
        let p = Number(Object.keys(tmpObj)[0]);
        answer = 1111 * p;
    }else if(maxCount === 3){
        // CASE 2 : 3개가 중복일 경우, 0, 1 인덱스 중 value가 큰 값이 p가 됨
        let p = Object.values(tmpObj)[0] > Object.values(tmpObj)[1] ? Number(Object.keys(tmpObj)[0]) : Number(Object.keys(tmpObj)[1]);
        let q = Object.values(tmpObj)[0] < Object.values(tmpObj)[1] ? Number(Object.keys(tmpObj)[0]) : Number(Object.keys(tmpObj)[1]);
        
        answer = (10 * p + q) ** 2;
    }else if(maxCount === 2 && minCount === 2){
        // CASE 3: 두 개씩 똑같을 경우, 그냥 key를 각각 가져오면 된다.
        let p = Number(Object.keys(tmpObj)[0]);
        let q = Number(Object.keys(tmpObj)[1]);
        answer = (p + q) * Math.abs(p - q);
    }else if(maxCount === 2 && minCount === 1){
        // CASE 4: 두 개 같고 나머지 두개가 서로 다를 경우, 두개 같은 값을 1로 둔다.
        let p = Number(Object.values(tmpObj)[0]) === 2 ? 1 : Number(Object.keys(tmpObj)[0]);
        let q = Number(Object.values(tmpObj)[1]) === 2 ? 1 : Number(Object.keys(tmpObj)[1]);
        let r = Number(Object.values(tmpObj)[2]) === 2 ? 1 : Number(Object.keys(tmpObj)[2]);
        
        answer = p * q * r;
    }else{
        // CASE 5: 다 다를 경우, 최소만 구한다.
        answer = Number(Math.min(...Object.keys(tmpObj)));
    }
    
    return answer;
}