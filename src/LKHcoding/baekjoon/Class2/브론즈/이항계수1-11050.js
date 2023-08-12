const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 이항 계수 구하기
// nCk = n! / (k! * (n - k)!)
solution(input);

function solution(input) {
  const [N, K] = input;

  const nFactorial = factorial(N);

  const kFactorial = factorial(K);

  const nMinusKFactorial = factorial(N - K);

  const answer = nFactorial / (kFactorial * nMinusKFactorial);
  console.log(answer);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * 이항계수가 뭔지도 몰랐다..ㅋㅋ
 * 챗지피티를 통해 설명을 듣고 풀었다.
 *
 * 이항 계수는 조합론에서 사용되는 개념으로,
 * 주어진 크기의 집합에서 특정 개수의 원소를 선택하는 방법의 수를 나타냅니다.
 *
 * 주로 "n choose k" 또는 "nCk"로 표기되며,
 * n은 집합의 크기이고 k는 선택하려는 원소의 개수입니다.
 * 이항 계수는 다음의 공식으로 계산됩니다:
 * nCk = n! / (k! * (n - k)!)
 *
 * 여기서 n!은 n 팩토리얼을 나타내며,
 * n! = n * (n - 1) * (n - 2) * ... * 2 * 1 입니다.
 * k! 역시 마찬가지로 k 팩토리얼을 의미합니다.
 *
 * 이항 계수는 주로 확률론, 통계학, 조합론 등 다양한 수학적 문제에서 사용됩니다.
 * 예를 들어, 주어진 상황에서 어떤 사건이 일어날 확률을 계산하는 데 사용되거나,
 * 이항 분포와 관련된 문제에서 활용될 수 있습니다.
 */
