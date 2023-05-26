/*
* [제목] 마지막 두 원소
* [링크] https://school.programmers.co.kr/learn/courses/30/lessons/181927

* [문제] 
    정수 리스트 num_list가 주어질 때,
    마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면
    마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

    2 ≤ num_list의 길이 ≤ 10
    1 ≤ num_list의 원소 ≤ 9

* [예시] 
    1.
    num_list	    result
    [2, 1, 6]	    [2, 1, 6, 5]
    [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
*/

function solution(num_list) {
    var answer = [];
    let lastItem = num_list[num_list.length - 1];
    let prevItem = num_list[num_list.length - 2];
    answer = [...num_list, lastItem > prevItem ? lastItem - prevItem : lastItem * 2];
    return answer;
}