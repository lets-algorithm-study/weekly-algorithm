function answer(participant, completion) {
  const result = [];
  const map = new Map();

  completion.forEach(item => {
    map.set(item, (map.get(item) ?? 0) + 1);
  });

  for (const item of participant) {
    if (map.get(item) === undefined) {
      result.push(item);
      break;
    }

    if (map.get(item) !== 0) {
      map.set(item, map.get(item) - 1);
      continue;
    }

    result.push(item);
    break;
  }

  return result[0];
}

console.log(answer(['leo', 'kiki', 'eden'], ['kiki', 'eden']));
console.log(answer(['a', 'a', 'b'], ['a', 'b']));
