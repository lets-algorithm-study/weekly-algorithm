//https://school.programmers.co.kr/learn/courses/30/lessons/120826
function solution(my_string, letter) {
    const answer = my_string.split('');
    const a = answer.filter((element)=> element !== letter);

    return a.join('');
}

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
