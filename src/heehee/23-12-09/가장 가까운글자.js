function solution(s) {
  // banana
  var answer = [];

  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i])) {
      answer.push(i - hash.get(s[i]));
      hash.set(s[i], i);
    } else {
      hash.set(s[i], i);
      answer.push(-1);
    }
  }

  return answer;
}
