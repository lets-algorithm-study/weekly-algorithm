const { expect, describe } = require('@jest/globals');
const prob = require('./유한소수판별하기');

describe('유한소수판별하기', () => {
  it('기약분수', () => {
    expect(prob.giyak(2, 3)).toBe(true);
    expect(prob.giyak(3, 5)).toBe(true);
    expect(prob.giyak(4, 6)).toBe(false);
    expect(prob.giyak(7, 20)).toBe(false);
    expect(prob.giyak(11, 22)).toBe(false);
    expect(prob.giyak(12, 21)).toBe(false);
  });

  it("소인수분해", () => {
    expect(prob.factorize(2)).toEqual(2);
    expect(prob.factorize(3)).toEqual(3);
    expect(prob.factorize(4)).toEqual(2);
    expect(prob.factorize(5)).toEqual(5);
    expect(prob.factorize(6)).toEqual(3);
    expect(prob.factorize(7)).toEqual(7);
    expect(prob.factorize(8)).toEqual(2);
    expect(prob.factorize(9)).toEqual(3);
    expect(prob.factorize(10)).toEqual(5);
  });

  it('유한소수', () => {
    expect(prob.solution(7, 20)).toBe(1);
    expect(prob.solution(11, 22)).toBe(1);
    expect(prob.solution(12, 21)).toBe(2);
  });
});
