// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  phone_book.sort(); // 문자열 정렬 (NlogN)
  // 비교해야 하는 케이스들끼리 붙게 해서 시간복잡도 줄인다.

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 정렬을 했으니까 뒤에꺼를 기준으로 앞에꺼랑 비교한다
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

console.log(solution(['119', '97674223', '1195524421']));
