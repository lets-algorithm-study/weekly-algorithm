function solution(nums) {
    const maxSelection = nums.length / 2;
    const set = new Set(nums);
    let answer = set.size > maxSelection ? maxSelection : set.size;
    return answer;
}