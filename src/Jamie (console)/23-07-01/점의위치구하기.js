function solution(dot) {
    var answer = 0;
    if(dot[0]>0 && dot[1]>0){
        return 1
    }
    if(dot[0]<0 && dot[1]>0){
        return 2
    }
    if(dot[0]<0 && dot[1]<4){
        return 3
    }
    if(dot[0]>0 && dot[1]<0){
        return 4
    }
}


function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
