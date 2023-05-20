/**정수 리스트 num_list가 주어집니다.
 * 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중
 * 큰 값을 return 하도록 solution 함수를 완성해주세요.
 * 두 값이 같을 경우 그 값을 return합니다.
 */


function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(let i=0; i<num_list.length; i++){
        if(i%2 === 0){
            even += num_list[i]
        }else{
            odd += num_list[i]
        }
    }
    return Math.max(even, odd)
}
