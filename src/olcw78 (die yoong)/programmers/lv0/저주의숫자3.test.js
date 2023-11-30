const { expect } = require('@jest/globals');
const prob = require('./저주의숫자3');

it('solution', () => {
  expect(prob(15)).toBe(25);
  expect(prob(40)).toBe(76);

  const $from1to100 = new Array(100).fill().map((_, i) => i + 1);
  console.log($from1to100.map(prob));
  // ->
  /**
      1,         2,         4,         5,         7,         8,
      10,        11,        14,        16,        17,        19,
      20,        22,        25,        26,        28,        29,
      40,        41,        44,        46,        47,        49,
      50,        52,        55,        56,        58,        59,
      61,        62,        64,        65,        67,        68,
      70,        71,        74,        76,        77,        79,
      80,        82,        85,        86,        88,        89,
      91,        92,        94,        95,        97,        98,
      100,       undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined
    ] */
  // 로 어느 순간부터는 undefined 로 100 을 넣었어도 3x 마을 숫자가 안나옴 -> 표본갯수가 부족해.
});
