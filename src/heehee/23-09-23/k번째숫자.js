function solution(array, commands) {
    var answer = [];
    commands.forEach(v => {
        const i = v[0];
        const j = v[1];
        const k = v[2];
        const leng = array.slice(i - 1,j).sort(function(a, b){return a - b;})[k -1];
        answer.push(leng);
        console.log(leng);
    })
    return answer;
}