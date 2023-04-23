/**
 * Description
 * JadenCase: 모든 단어의 첫 문자가 대문자 / 그 외의 알파벳은 소문자인 문자열 / 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자
 *
 * s: 1 <= s.length <= 200
 * s: string
 * s (알파벳, 숫자, 공백문자)
 *
// 숫자 -> 단어의 첫 문자로만 나옴.
// 숫자로만 이루어진 단어 X.
// 공백문자는 연속으로 나올 수 없음.
//
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
	const tokens = s.split(' ');
	for (let i = 0; i < tokens.length; i++) {
		const first = tokens[i].charAt(0);

		// 첫번째 char 숫자아니면 대문자로 변환.
		if (Number.isNaN(Number(first))) {
			tokens[i] = first.toUpperCase() + tokens[i].substring(1);
		}

		// 나머지 캐릭터들 소문자로 변환.
		for (let j = 1; j < tokens[i].length; j++) {
			const lower = tokens[i].charAt(j).toLowerCase();
			tokens[i] =
				tokens[i].substring(0, j) + lower + tokens[i].substring(j + 1);
		}
	}

	return tokens.join(' ');
}

console.log(solution('3people unFollowed me'));

function s(s) {
	return s
		.split(' ')
		.map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
		.join(' ');
}
console.log(s('3people unFollowed me'));
