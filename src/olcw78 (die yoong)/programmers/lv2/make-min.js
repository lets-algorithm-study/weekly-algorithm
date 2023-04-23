// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복.
// 두 수를 곱한 값을 누적합.
// 최종적으로 누적된 값이 최소.
function solution(A, B) {
	A.sort((n1, n2) => n1 - n2);
	B.sort((n1, n2) => n2 - n1);

	const len = A.length;
	let acc = A[0] * B[0];
	for (let i = 1; i < len; ++i) {
		acc += A[i] * B[i];
	}
	return acc;
}
