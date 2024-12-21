// 문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이
// stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다.
// 문자열이 있으면 true, 없으면 false를 반환하는 함수를 작성하세요.

// 제약조건
// 입력 문자열은 영어 소문자로만 이러우져 있습니다.
// 문자열의 길이는 1 이상 1000000 이하입니다.
// 해시 충돌은 없습니다.
// 아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하세요.
// - 다음 식에서 p 는 31, m 은 1,000,000,007로 합니다.
// - hash(s) = (s[O] + s[1]*p + s[2]*p . s[n-1]*p^1) mod m

// 입출력의 예
// stringList = ["apple", "banana", "cherry"]
// queryList = ["banana", "kiwi", "melon", "apple"]
// return = [true, false, true, true]

function solution(stringList, queryList) {
  const p = 31;
  const m = 1000000007;

  const hash = (s) => {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (h * p ** i + s.charCodeAt(i)) % m;
    }
  };

  const hashList = stringList.map((s) => hash(s));
  const answer = queryList.map((q) => hashList.includes(hash(q)));

  return answer;
}
