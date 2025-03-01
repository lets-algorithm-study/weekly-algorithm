const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const data = input.map(item => item.split('').map(v => v === 'W'));

solution(N, M, data);

function solution(N, M, data) {
  let answer = Infinity;
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let firstItem = data[i][j];
      let count = 0;

      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l++) {
          if (data[k][l] !== firstItem) {
            count++;
          }
          firstItem = !firstItem;
        }
        firstItem = !firstItem;
      }
      // 검은색을 기준으로 채울지, 흰색을 기준으로 채울지 둘 중에 더 손이 덜가는 케이스도 고려해야해서 3가지 중 min을 구함
      answer = Math.min(answer, count, 64 - count);
    }
  }

  console.log(answer);
}

// 아래는 신박했던 풀이

// const [MnN, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// const [N, M] = MnN.split(' ').map(Number);
// const lines = ['WBWBWBWB', 'BWBWBWBW'];
//
// let answer = [];
//
// for (let i = 0; i <= N - 8; i++) {
//   for (let j = 0; j <= M - 8; j++) {
//     for (let oe = 0; oe < 2; oe++) {
//       let count = 0;
//       for (let x = i; x < i + 8; x++) {
//         for (let y = j; y < j + 8; y++) {
//           if (arr[x][y] !== lines[(x + oe) % 2][y - j]) {
//             count++;
//           }
//         }
//       }
//       answer.push(count);
//     }
//   }
// }
//
// console.log(Math.min(...answer));
