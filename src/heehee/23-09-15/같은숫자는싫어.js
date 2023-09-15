function solution(arr) {
  const answer = [];
  let prev = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != prev) {
      answer.push(arr[i]);
      prev = arr[i];
    }
  }

  return answer;
}
