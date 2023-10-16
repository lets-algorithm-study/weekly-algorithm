const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

input.shift();

const data = input.map(Number);

solution(data);

function solution(data) {
  data.sort((a, b) => a - b);

  const map = new Map();

  let sum = 0;
  for (let i = 0; i < data.length; ++i) {
    // 산술평균
    const item = data[i];
    sum += item;

    // 최빈값;
    map.set(item, (map.get(item) ?? 0) + 1);
  }

  const 평균 = sum / data.length;
  const 정수 = Math.trunc(평균);
  const 소수 = 평균 - Math.trunc(평균);
  const is반올림 = Math.abs(소수) >= 0.5;
  const isPositive = 평균 >= 0;
  const 산술평균 = isPositive
    ? is반올림
      ? 정수 + 1
      : 정수
    : is반올림
    ? 정수 - 1
    : 정수;

  const 중앙값 = data[Math.trunc(data.length / 2)];
  let 최빈값 = {
    value: 0,
    key: data[0],
  };
  let 최빈값List = [];
  map.forEach((value, key) => {
    if (value > 최빈값.value) {
      최빈값.value = value;
      최빈값.key = key;

      최빈값List = [];
    }

    if (value === 최빈값.value) {
      최빈값List.push(key);
    }
  });

  const 최빈값답 = 최빈값List.length >= 2 ? 최빈값List[1] : 최빈값.key;
  const 범위 = Math.abs(data[0] - data[data.length - 1]);

  const answer = [산술평균, 중앙값, 최빈값답, 범위];

  console.log(answer.join('\n'));
}
