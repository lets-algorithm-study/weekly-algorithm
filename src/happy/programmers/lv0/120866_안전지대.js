/*
* [제목] 안전지대
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/120866

* [문제] 
    다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.

    0 0 0 0 0
    0 x x x 0
    0 x 1 x 0
    0 x x x 0
    0 0 0 0 0

    지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
    지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

    board는 n * n 배열입니다.
    1 ≤ n ≤ 100
    지뢰는 1로 표시되어 있습니다.
    board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
*/

function solution(board) {
    var answer = 0;
    
    let xLen = board.length;
    let yLen = board[0].length;
    
    for(let i =0; i < xLen; i++){
        for(let k =0; k < yLen; k++){
            if(board[i][k] === 1){
                if(i - 1 >= 0 && board[i - 1][k] !== 1) board[i - 1][k] = 2;
                
                if(i + 1 < xLen && board[i + 1][k] !== 1) board[i + 1][k] = 2;
                
                if(k - 1 >= 0 && board[i][k - 1] !== 1) board[i][k - 1] = 2;
                
                if(k + 1 < yLen && board[i][k + 1] !== 1) board[i][k + 1] = 2;
                
                if(k - 1 >= 0 && i - 1 >= 0 && board[i - 1][k - 1] !== 1) board[i - 1][k - 1] = 2;
                
                if(k - 1 >= 0 && i + 1 < xLen && board[i + 1][k - 1] !== 1) board[i + 1][k - 1] = 2;
                
                if(k + 1 < yLen && i - 1 >= 0 && board[i - 1][k + 1] !== 1) board[i - 1][k + 1] = 2;
                
                if(k + 1 < yLen && i + 1 < xLen && board[i + 1][k + 1] !== 1) board[i + 1][k + 1] = 2;
            }
        }
    }
    
    for(let i =0; i < xLen; i++){
        for(let k =0; k < yLen; k++){
            if(board[i][k] >= 1){
                answer += 1;
            }
        }
    }
    return xLen * yLen - answer;
}