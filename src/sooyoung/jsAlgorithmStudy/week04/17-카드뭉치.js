function solution(cards1, cards2, goal) {
  var answer = '';

  for (let i = 0; i < goal.length; i++) {
    let card1 = cards1[0] ?? '';
    let card2 = cards2[0] ?? '';

    if (goal[i] === card1) {
      cards1.shift();
    } else if (goal[i] === card2) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
