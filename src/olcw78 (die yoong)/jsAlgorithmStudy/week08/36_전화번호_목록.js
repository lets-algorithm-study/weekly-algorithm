// TC: O(NlogN) <- sort
// 정렬해놓으면 이어질만한 애들끼리 배치되므로, forfor 할필요없음
function solution(phone_book) {
  phone_book.sort();
  console.log(phone_book);

  for (let i = 0; i < phone_book.length - 1; i++) {
    const cur = phone_book[i];
    if (phone_book[i + 1].startsWith(cur)) {
      return true;
    }
  }
  return false;
}

const r1 = solution(['119', '97674223', '1195524421']);
console.log(r1); // false

const r2 = solution(['123', '456', '789']);
console.log(r2); // false

const r3 = solution(['12', '123', '1235', '567', '88']);
console.log(r3); // false

