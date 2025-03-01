const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let L = +input[0];
let str = input[1];

solution(L, str);

function solution(L, str) {
  const dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const charNums = str.split('').map(item => dict[item]);

  let sum = 0;
  let r = 1;
  const M = 1234567891;
  for (let i = 0; i < L; i++) {
    sum += (charNums[i] * r) % M;
    r *= 31;
    r %= M;
  }

  console.log(sum % M);
}

/**
 * 숫자가 너무 커지는걸 방지하기위해 분배법칙을 통해 계속 % M 연산을
 * 중간 중간에 섞어줬어야 했다. 2번이나 50점밖에 안나옴...
 * 처음에는 중간중간에 % M을 안해줘서 문제였고,
 * 두번째는 최종 console.log 출력할때 % M을 안해줬다.
 * for 문을 돌면서 % M을 하니까 문제없을꺼라고 생각했는데
 * 마지막에 sum에 또 누적합산되면서 M보다 커질 수 있으니
 * 출력 찍는 마지막에도 % M을 해줬어야 했다.
 * 이거까지 해주니 100점으로 통과됨
 * 문제는 어렵지 않았지만 어디서 조건이 안맞았는지 생각하는게 까다로웠다.
 */
